<?php

namespace App\Models;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id', 'id');
    }
    public function replies()
    {
        return $this->hasMany(CommentReply::class, 'comment_id', 'id');
    }
}
