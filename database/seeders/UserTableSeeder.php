<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //create user
        $user = User::create([
            'name'      => 'Syafik',
            'email'     => '09021182328015@student.unsri.com',
            'nim'       => '09021182328015',
            'fakultas'  => 'Fakultas Ilmu Komputer',
            'jurusan'   => 'Teknik Informatika',
            'no_telp'   => '082123456789',
            'password'  => bcrypt('password'),
        ]);

        //get all permissions
        $permissions = Permission::all();

        //get role admin
        $role = Role::find(1);

        //assign permission to role
        $role->syncPermissions($permissions);

        //assign role to user
        $user->assignRole($role);
    }
}