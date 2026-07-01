<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::where('nama_role', 'Admin')->first();

        if ($adminRole) {
            User::create([
                'role_id' => $adminRole->id,
                'nama' => 'Administrator', // Berubah dari 'name'
                'username' => 'admin',
                'email' => 'admin@klinik.test',
                'password' => Hash::make('password'),
                'status' => 'aktif',
            ]);
        }
    }
}