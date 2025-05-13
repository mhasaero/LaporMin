<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\StatusBarang;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function index()
    {
        // Ambil semua data dari table barang
        $barang = Barang::all();
        $statusBarang = StatusBarang::all();

        // Kirim data ke Inertia + React
        return Inertia::render('Barang/Index', [
            'barang' => $barang,
            'statusBarang' => $statusBarang,
        ]);
    }

    public function create()
    {
        return Inertia::render('Barang/Create');
    }

    public function store(Request $request)
    {
        dd($request->all());
        $validated = $request->validate([
            'nama_barang' => 'required|string|max:255',
            'kategori'    => 'required|string|max:100',
            'deskripsi'   => 'nullable|string',
            'stok'        => 'required|integer|min:0',
            'lokasi'      => 'required|string|max:100',
            'link_gambar' => 'nullable|string',
        ]);


        $insertBarang = Barang::create($validated);

        StatusBarang::create([
            'barang_id' => $insertBarang->id,
            'status_tersedia'    => $request->status_tersedia,
            'status_sedang_dipinjam'    => $request->status_sedang_dipinjam,
            'status_rusak'    => $request->status_rusak,
        ]);

        return redirect()->route('dashboard')->with('success', 'Barang berhasil ditambahkan!');
    }

    public function update(Request $request, Barang $barang)
    {
        $validated = $request->validate([
            'nama_barang' => 'required|string|max:255',
            'kategori'    => 'required|string|max:100',
            'deskripsi'   => 'nullable|string',
            'stok'        => 'required|integer|min:0',
            'lokasi'      => 'required|string|max:100',
        ]);

        $barang->update($validated);

        StatusBarang::where('barang_id', $barang->id)->update([
            'status_tersedia'    => $request->status_tersedia,
            'status_sedang_dipinjam'    => $request->status_sedang_dipinjam,
            'status_rusak'    => $request->status_rusak,
        ]);

        return redirect()->route('dashboard')->with('success', 'Barang berhasil diupdate!');
    }

    public function destroy($id)
    {
        

    $barang = Barang::find($id);

    if (!$barang) {
        return redirect()->route('dashboard')->with('error', 'Barang tidak ditemukan');
    }

    $barang->delete();

    return redirect()->route('dashboard')->with('success', 'Barang berhasil dihapus');

    }
}
