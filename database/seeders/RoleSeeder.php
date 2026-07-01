<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::create([
            'nama_role' => 'Admin',
            'deskripsi' => 'Administrator Sistem',
        ]);
    }
}