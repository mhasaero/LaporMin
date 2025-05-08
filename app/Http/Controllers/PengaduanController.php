<?php

namespace App\Http\Controllers;

use App\Models\Pengaduan;
use Illuminate\Http\Request;

class PengaduanController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'msg' => 'required|string',
            'link_gambar' => 'nullable|array',
            'link_gambar.*' => 'url',
        ]);

        // Simpan data ke database
        Pengaduan::create([
            'name' => $validated['name'],
            'msg' => $validated['msg'],
            'link_gambar' => $validated['link_gambar'],
        ]);

        return redirect()->back()->with('success', 'Pengaduan berhasil dikirim.');
    }
}
