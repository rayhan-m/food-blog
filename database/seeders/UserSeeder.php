<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = Role::all();
        foreach ($roles as $key => $role) {
            $user = new User();
            $user->name = $role->name;
            $user->email = Str::lower(str_replace(' ','',$role->name)) . '@demo.com';
            $user->password = Hash::make('123456');
            $user->role_id = $role->id;
            $user->email_verified_at = now();
            // avatar
            $user->avatar = 'uploads/user/' . ($key + 1) . '.png';
            $user->save();
        }
    }
}
