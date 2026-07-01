<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    public function run(): void
    {
        $units = [
            ['nama' => 'Tablet'],
            ['nama' => 'Kapsul'],
            ['nama' => 'Botol'],
            ['nama' => 'Ampul'],
            ['nama' => 'Strip'],
        ];

        foreach ($units as $unit) {
            Unit::create($unit);
        }
    }
}