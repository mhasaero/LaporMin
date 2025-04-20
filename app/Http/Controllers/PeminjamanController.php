<?php

namespace App\Http\Controllers;

use App\Models\Peminjaman;
use App\Models\Barang;
use App\Models\StatusBarang;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PeminjamanController extends Controller
{
    public function index()
    {
        $peminjaman = Peminjaman::with(['user', 'barang'])->latest()->get();

        return Inertia::render('Peminjaman/Index', [
            'peminjaman' => $peminjaman,
        ]);
    }

    public function create()
    {
        $barang = Barang::where('stok', '>', 0)->get();
        
        return Inertia::render('Peminjaman/Create', [
            'barang' => $barang
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'barang_id' => 'required|exists:barang,id',
            'alasan' => 'required|string|max:255',
            'ruangan' => 'required|string|max:100',
        ]);

        Peminjaman::create([
            'nim' => Auth::user()->nim,
            'barang_id' => $request->barang_id,
            'tanggal_peminjaman' => now(),
            'alasan' => $request->alasan,
            'ruangan' => $request->ruangan,
            'status' => 'Belum Diproses',
        ]);

        return redirect()->back()->with('success', 'Pengajuan berhasil dikirim.');
    }

    public function approve(Peminjaman $peminjaman)
    {
        $peminjaman->update([
            'status' => 'Sedang Dipinjam',
            'tanggal_disetujui' => now(),
        ]);

        $status = StatusBarang::where('barang_id', $peminjaman->barang_id)->first();
        if ($status) {
            $status->decrement('status_tersedia');
            $status->increment('status_dipinjam');
        }
        
        return redirect()->back()->with('success', 'Peminjaman disetujui.');
    }

    public function reject(Peminjaman $peminjaman)
    {
        $peminjaman->update([
            'status' => 'Pengajuan Ditolak',
        ]);

        return redirect()->back()->with('info', 'Peminjaman ditolak.');
    }

    public function return(Peminjaman $peminjaman)
    {
        $peminjaman->update([
            'status' => 'Sudah Dikembalikan',
            'tanggal_pengembalian' => now(),
        ]);

        $status = StatusBarang::where('barang_id', $peminjaman->barang_id)->first();
        if ($status) {
            $status->increment('status_tersedia');
            $status->decrement('status_dipinjam');
        }

        return redirect()->back()->with('success', 'Barang berhasil dikembalikan.');
    }

}
