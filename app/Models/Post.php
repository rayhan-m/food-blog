<?php

namespace App\Models;

use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;
    // category relation 
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // user relation
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
