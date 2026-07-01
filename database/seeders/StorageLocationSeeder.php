<?php

namespace Database\Seeders;

use App\Models\StorageLocation;
use Illuminate\Database\Seeder;

class StorageLocationSeeder extends Seeder
{
    public function run(): void
    {
        $locations = [
            ['nama_lokasi' => 'Lemari A - Depan', 'deskripsi' => 'Lemari kaca di ruang periksa utama'],
            ['nama_lokasi' => 'Lemari B - IGD', 'deskripsi' => 'Lemari penyimpanan obat darurat'],
            ['nama_lokasi' => 'Kulkas Medis', 'deskripsi' => 'Penyimpanan obat yang membutuhkan suhu dingin'],
            ['nama_lokasi' => 'Gudang Belakang', 'deskripsi' => 'Penyimpanan stok utama'],
        ];

        foreach ($locations as $location) {
            StorageLocation::create($location);
        }
    }
}