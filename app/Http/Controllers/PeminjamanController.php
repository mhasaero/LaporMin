<?php

namespace App\Http\Controllers;

use App\Models\Peminjaman;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PeminjamanController extends Controller
{
    public function index()
    {
        $peminjamans = Peminjaman::with(['barang', 'user'])->get();
        return view('peminjaman.index', compact('peminjamans'));
    }

    public function create()
    {
        $barangs = Barang::where('stok', '>', 0)->get();
        return view('peminjaman.create', compact('barangs'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'barang_id' => 'required|exists:barangs,id',
            'alasan' => 'nullable|string',
        ]);

        Peminjaman::create([
            'user_nim' => Auth::user()->nim,
            'barang_id' => $request->barang_id,
            'tanggal_peminjaman' => now(),
            'alasan' => $request->alasan,
            'status' => 'Belum Diproses', // default status
        ]);

        // Kurangi stok barang
        $barang = Barang::find($request->barang_id);
        $barang->stok -= 1;
        $barang->save();

        return redirect()->route('peminjaman.index')->with('success', 'Peminjaman berhasil diajukan.');
    }

    public function setujui($id)
    {
        $peminjaman = Peminjaman::findOrFail($id);
        $peminjaman->status = 'Sedang Dipinjam';
        $peminjaman->tanggal_peminjaman = now();
        $peminjaman->save();

        // Kurangi stok barang
        $barang = $peminjaman->barang;
        $barang->stok -= 1;
        $barang->save();

        return back()->with('success', 'Peminjaman disetujui.');
    }

    public function tolak($id)
    {
        $peminjaman = Peminjaman::findOrFail($id);
        $peminjaman->status = 'Pengajuan Ditolak';
        $peminjaman->save();

        return back()->with('info', 'Pengajuan ditolak.');
    }

    public function kembalikan($id)
    {
        $peminjaman = Peminjaman::findOrFail($id);
        $peminjaman->status = 'Sudah Dikembalikan';
        $peminjaman->tanggal_pengembalian = now();
        $peminjaman->save();

        // Tambah stok barang
        $barang = $peminjaman->barang;
        $barang->stok += 1;
        $barang->save();

        return back()->with('success', 'Barang berhasil dikembalikan.');
    }

}
