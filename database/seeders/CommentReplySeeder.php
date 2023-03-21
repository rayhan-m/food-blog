<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\CommentReply;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CommentReplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = Comment::all();
        foreach ($comments as $key => $value) {
            $reply = new CommentReply();
            $reply->reply = \Faker\Factory::create()->text;
            $reply->comment_id = $value->id;
            $reply->active_status = 1;
            $reply->created_by = 1;
            $reply->updated_by = 1;
            $reply->save();
        }
    }
}
