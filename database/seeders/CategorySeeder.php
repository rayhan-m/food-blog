<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $categories = [
            [
                'name' => 'Burger',
                'slug' => 'burger',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Sandwich',
                'slug' => 'sandwich',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Pizza',
                'slug' => 'pizza',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Noodle',
                'slug' => 'noodle',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Chicken Fry',
                'slug' => 'chicken-fry',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Fried Rice',
                'slug' => 'fried-rice',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Pasta',
                'slug' => 'pasta',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Biryani',
                'slug' => 'biryani',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Dessert',
                'slug' => 'dessert',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Drinks',
                'slug' => 'drinks',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }
    }
}
