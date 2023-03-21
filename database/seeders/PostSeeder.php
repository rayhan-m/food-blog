<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $factory = \Faker\Factory::create();
        $cats = \App\Models\Category::all();
        foreach ($cats as $key => $cat) {
            $post = new Post();
            $post->title = $factory->name;
            $post->slug = $factory->slug;
            $post->description = $factory->text;
            $post->image = 'uploads/posts/' . ($key + 1) . '.jpeg';
            $post->category_id = $cat->id;
            $post->active_status = 1;
            $post->created_by = 1;
            $post->updated_by = 1;
            $post->save();
        }
    }
}
