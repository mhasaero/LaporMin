<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
// use Illuminate\Database\Seeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('barang')->insert([
            [
                'nama_barang' => 'Remote TV',
                'kategori' => 'Elektronik',
                'deskripsi' => 'Remote untuk TV di kelas',
                'stok' => 5,
                'lokasi' => 'Lab 1.1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Kabel HDMI',
                'kategori' => 'Kabel',
                'deskripsi' => 'Kabel HDMI untuk proyektor atau TV',
                'stok' => 10,
                'lokasi' => 'Lab 1.2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Kabel Power',
                'kategori' => 'Kabel',
                'deskripsi' => 'Kabel power untuk perangkat elektronik',
                'stok' => 8,
                'lokasi' => 'Lab 2.2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Kabel LAN',
                'kategori' => 'Kabel',
                'deskripsi' => 'Kabel jaringan LAN',
                'stok' => 15,
                'lokasi' => 'Lab 2.1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Proyektor',
                'kategori' => 'Elektronik',
                'deskripsi' => 'Proyektor untuk presentasi kelas',
                'stok' => 3,
                'lokasi' => 'Lab 1.1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'TV',
                'kategori' => 'Elektronik',
                'deskripsi' => 'TV untuk keperluan multimedia',
                'stok' => 2,
                'lokasi' => 'Lab 1.1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Spidol',
                'kategori' => 'Alat Tulis',
                'deskripsi' => 'Spidol untuk whiteboard',
                'stok' => 20,
                'lokasi' => 'Ruang Kelas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_barang' => 'Remote AC',
                'kategori' => 'Elektronik',
                'deskripsi' => 'Remote untuk pengatur suhu AC',
                'stok' => 5,
                'lokasi' => 'lab 1.2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
    }
}
