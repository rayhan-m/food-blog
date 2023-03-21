<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Comment;
use App\Models\CommentReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function commentStore(Request $request)
    {
        $request->validate([
            'comment' => 'required',
        ]);

        if (!Auth::check()) {
            return redirect()->back()->with('message', 'Please login first!');

        }

        $comment = new Comment();
        $comment->comment = $request->comment;
        $comment->post_id = $request->post_id;
        $comment->created_by = Auth::user()->id;
        $comment->save();

        return redirect()->back()->with('message', 'Comment Added successfully!');
    }
    

    // commentList
    public function commentList()
    {
        $comments = Comment::all();
        // map 
        $comments = $comments->map(function ($comment) {
            return [
                'id' => $comment->id,
                'createdBy' => $comment->user->name,
                'avatar' => asset($comment->user->avatar),
                'comment' => $comment->comment,
                'created_at' => $comment->created_at->diffForHumans(),
                'postTitle' => $comment->post->title,
            ];
        });
     
        return Inertia::render('Comment/Index', [
            'comments' => $comments,
        ]);
    }

    // commentReply
    public function commentReply($id){
        $comment = Comment::find($id);
        return Inertia::render('Comment/Reply', [
            'comment' => [
                'id' => $comment->id,
                'comment' => $comment->comment,
                'postTitle' => $comment->post->title,
            ],
        ]);
    }

    public function replyStore(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'reply' => 'required',
        ]);

        $comment = new CommentReply();
        $comment->reply = $request->reply;
        $comment->comment_id = $request->comment_id;
        $comment->created_by = Auth::user()->id;
        $comment->save();
        
        return redirect()->route('comment.list')->with('message', 'Reply Added successfully!');
    }
}
