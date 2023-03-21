<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Slider;
use App\Models\Comment;
use App\Models\Category;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use function PHPSTORM_META\map;
use App\Http\Traits\FileUploadTrait;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    use FileUploadTrait;
    public function landing()
    {
        $posts = Post::where('active_status',1)->latest()->get();
        $sliders = Slider::where('active_status',1)->get();
        $data['sliders'] = $sliders->map(function ($slider) {
            return [
                'id' => $slider->id,
                'title' => $slider->title,
                'image' => asset($slider->image),
            ];
        });

        // map 
        $data['posts'] = $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'description' => $post->description,
                'category' => $post->category->name,
                'image' => asset($post->image),
                'created_at' => $post->created_at->diffForHumans(),
            ];
        });
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'data' =>$data,
        ]);
    }
    public function PostDetail(Post $post)
    {
        $comments = Comment::where('post_id',$post->id)->get();
        $data['comments'] = $comments->map(function ($comment) {
            return [
                'id' => $comment->id,
                'createdBy' => $comment->user->name,
                'avatar' => asset($comment->user->avatar),
                'comment' => $comment->comment,
                'created_at' => $comment->created_at->diffForHumans(),
                'replies' => $comment->replies->map(function ($reply) {
                    return [
                        'id' => $reply->id,
                        'createdBy' => $reply->user->name,
                        'avatar' => asset($reply->user->avatar),
                        'reply' => $reply->reply,
                        'created_at' => $reply->created_at->diffForHumans(),
                    ];
                }),
            ];
        });

        $data['postDetail'] =  [
            'id' => $post->id,
            'title' => $post->title,
            'slug' => $post->slug,
            'description' => $post->description,
            'category' => $post->category->name,
            'image' => asset($post->image),
            'created_at' => $post->created_at->diffForHumans(),
            'createdBy' => $post->user->name,
        ];

        $recentPost = Post::where('active_status',1)->latest()->take(5)->get();
        $data['recentPosts'] = $recentPost->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'image' => asset($post->image),
                'created_at' => $post->created_at->diffForHumans(),
            ];
        });

        
        return Inertia::render('PostDetail', [
            'data' => $data,
        ]);
    }

    public function index()
    {
        $posts = Post::all();
        // map
        $posts = $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'description' => $post->description,
                'category' => $post->category->name,
                'image' => asset($post->image),
                'created_at' => $post->created_at->diffForHumans(),
            ];
        });
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function create()
    {
        $categories = Category::where('active_status',1)->get();
        return Inertia::render('Posts/Create',['categories' => $categories]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        Validator::make($request->all(), [
            'title' => ['required'],
        ])->validate();

        $post = new Post();
        $post->title = $request->title;
        $post->slug = Str::slug($request->title);
        $post->description = $request->description;
        $post->category_id = $request->category_id;
        if ($request->image != "") {
            $post->image = $this->uploadFile($request->image,'posts');
        }
        $post->active_status = $request->active_status;
        $post->save();
        return redirect()->route('posts.index')->with('message', 'Post Added successfully!');
    }

    public function edit(Post $post)
    {
        $categories = Category::where('active_status',1)->get();
        return Inertia::render('Posts/Edit', [
            'post' => $post,
            'categories' => $categories
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
        ])->validate();
    
        $post = Post::find($id);
        $post->title = $request->title;
        $post->slug = Str::slug($request->title);
        $post->description = $request->description;
        $post->category_id = $request->category_id;
        if ($request->image != "") {
            $post->image = $this->uploadFile($request->image,'posts');
        }
        $post->active_status = $request->active_status;
        $post->save();
        return redirect()->route('posts.index')->with('message', 'Post Updated successfully!');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->route('posts.index');
    }
    
}
