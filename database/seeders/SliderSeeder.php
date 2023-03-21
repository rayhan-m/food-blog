<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $slider = [
            [
                'title' => 'Slider 1',
                'image' => 'uploads/sliders/1.jpeg',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'title' => 'Slider 2',
                'image' => 'uploads/sliders/2.jpeg',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'title' => 'Slider 3',
                'image' => 'uploads/sliders/3.jpeg',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'title' => 'Slider 4',
                'image' => 'uploads/sliders/4.jpeg',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'title' => 'Slider 5',
                'image' => 'uploads/sliders/5.jpeg',
                'active_status' => 1,
                'created_by' => 1,
                'updated_by' => 1,
            ],
        ];
        \DB::table('sliders')->insert($slider);
    }
}
