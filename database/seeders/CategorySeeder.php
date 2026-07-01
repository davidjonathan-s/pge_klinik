<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['nama' => 'Analgesik', 'deskripsi' => 'Obat pereda nyeri'],
            ['nama' => 'Antibiotik', 'deskripsi' => 'Obat untuk infeksi bakteri'],
            ['nama' => 'Vitamin', 'deskripsi' => 'Suplemen vitamin dan mineral'],
            ['nama' => 'Antiseptik', 'deskripsi' => 'Obat pencegah infeksi pada luka'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}