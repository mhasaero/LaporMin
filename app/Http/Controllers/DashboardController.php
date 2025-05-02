<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Peminjaman;
use App\Models\User;
use App\Models\Pengaduan;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $barang = Barang::with('status')->get();
        $peminjaman = Peminjaman::with(['barang', 'user'])->get();
        $opsiStatus = ['Belum Diproses', 'Sedang Dipinjam', 'Sudah Dikembalikan', 'Pengajuan Ditolak'];

        return Inertia::render('Admin/Dashboard/Dashboard', [
            'barang' => $barang,
            'peminjaman' => $peminjaman,
            'users' => User::all(),
            'status' => $opsiStatus,
            'pengaduan' => Pengaduan::all(),
        ]);
    }
}