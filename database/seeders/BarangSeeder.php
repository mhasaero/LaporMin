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
                'nama_barang' => 'Test',
                'kategori' => 'Test',
                'deskripsi' => 'Tidak Test',
                'stok' => 2,
                'lokasi' => 'Lab A',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
