<?php

namespace App\Http\Controllers;

use App\Models\Pengaduan;
use Illuminate\Http\Request;


class PengaduanController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'msg' => 'required|string',
        ]);

        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('pengaduan_images', 'public');
            }
        }

        Pengaduan::create([
            'name' => $request->name,
            'msg' => $request->msg,
        ]);

        return redirect()->back()->with('success', 'Pengaduan berhasil dikirim.');
    }
}
