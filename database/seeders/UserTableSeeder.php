<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        //get all permissions
        $permissions = Permission::all();

        $adminRole = Role::find(1);
        $userRole = Role::find(2);

        $adminRole->syncPermissions($permissions);

        // --- Buat akun admin ---
        $admin = User::firstOrCreate(
            ['email' => 'admin@student.unsri.ac.id'],
            [
                'name'      => 'Admin',
                'nim'       => '09021182328001',
                'fakultas'  => 'Fakultas Ilmu Komputer',
                'jurusan'   => 'Teknik Informatika',
                'no_telp'   => '081234567890',
                'password'  => Hash::make('admin123'),
            ]
        );
        $admin->assignRole($adminRole);

        // --- Buat akun user biasa ---
        $user = User::firstOrCreate(
            ['email' => '09021182328015@student.unsri.ac.id'],
            [
                'name'      => 'M. Ilham Syafik',
                'nim'       => '09021182328015',
                'fakultas'  => 'Fakultas Ilmu Komputer',
                'jurusan'   => 'Teknik Informatika',
                'no_telp'   => '082123456789',
                'password'  => Hash::make('password'),
            ]
        );
        $user->assignRole($userRole);
    }
}