<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = Post::all();
        foreach ($posts as $key => $value) {
            $comment = new Comment();
            $comment->comment = \Faker\Factory::create()->text;
            $comment->post_id = $value->id;
            $comment->active_status = 1;
            $comment->created_by = 2;
            $comment->updated_by = 2;
            $comment->save();
        }
    }
}
