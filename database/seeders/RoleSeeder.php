<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['Admin', 'Blogger'];

        foreach ($roles as $key => $r) {
            $role =new Role();
            $role->name= $r;
            $role->type=0;
            $role->save();
        }
    }
}
