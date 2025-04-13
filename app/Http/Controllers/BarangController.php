<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function index()
    {
        // Ambil semua data dari table barang
        $barang = Barang::all();

        // Kirim data ke Inertia + React
        return Inertia::render('Barang/Index', [
            'barang' => $barang
        ]);
    }

    public function create()
    {
        return Inertia::render('Barang/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_barang' => 'required|string|max:255',
            'kategori'    => 'required|string|max:100',
            'deskripsi'   => 'nullable|string',
            'stok'        => 'required|integer|min:0',
            'status'      => 'required|in:Tersedia,Sedang Dipinjam,Rusak',
            'lokasi'      => 'required|string|max:100',
        ]);

        Barang::create($validated);

        return redirect()->route('barang.index')->with('success', 'Barang berhasil ditambahkan!');
    }

    public function update(Request $request, Barang $barang)
    {
        $validated = $request->validate([
            'nama_barang' => 'required|string|max:255',
            'kategori'    => 'required|string|max:100',
            'deskripsi'   => 'nullable|string',
            'stok'        => 'required|integer|min:0',
            'status'      => 'required|in:Tersedia,Sedang Dipinjam,Rusak',
            'lokasi'      => 'required|string|max:100',
        ]);

        $barang->update($validated);

        return redirect()->route('barang.index')->with('success', 'Barang berhasil diupdate!');
    }

    public function destroy(Barang $barang)
    {
        $barang->delete();

        return redirect()->route('barang.index')->with('success', 'Barang berhasil dihapus!');
    }
}
