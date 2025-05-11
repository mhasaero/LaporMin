<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminUsersSeeder extends Seeder
{
    public function run(): void
    {
        $admins = [
            ['name' => 'Hepiyani, S.T', 'nim' => '198602112023211009'],
            ['name' => 'Imron, S.T', 'nim' => '197909192023211004'],
            ['name' => 'Utari Hasanah, S.Kom.', 'nim' => '199511062023212023'],
            ['name' => 'Wisnu Adi Putra, S.Kom', 'nim' => '198809052024211001'],
            ['name' => 'Djoko Atom, S.T', 'nim' => '198112232023211006'],
        ];

        $role = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);

        foreach ($admins as $admin) {
            $user = User::firstOrCreate(
                ['nim' => $admin['nim']],
                [
                    'name' => $admin['name'],
                    'email' => $admin['nim'].'@gmail.com',
                    'password' => Hash::make('admin' . substr($admin['nim'], -3)),
                    'fakultas' => 'Fakultas Ilmu Komputer',             ]
            );
            $user->assignRole($role);
        }
    }
}
