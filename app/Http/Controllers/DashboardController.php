<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Peminjaman;
use App\Models\User;
use App\Models\StatusBarang;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $barang = Barang::with('status')->get();
        $peminjaman = Peminjaman::with(['barang', 'user'])->get();

        return Inertia::render('Dashboard/Dashboard', [
            'barang' => $barang,
            'peminjaman' => $peminjaman,
            'users' => User::all(),
            'status' => StatusBarang::all(),
        ]);
    }
}