<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PeminjamanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('peminjaman')->insert([
            [
                'nim' => '09021182328015',
                'barang_id' => 1,
                'alasan' => 'Untuk keperluan praktikum',
                'ruangan' => 'Lab A',
                'status' => 'Belum Diproses',
                'tanggal_pengajuan' => Carbon::now(),
                'tanggal_disetujui' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
