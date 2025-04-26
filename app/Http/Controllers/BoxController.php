<?php

namespace App\Http\Controllers;

use App\Models\Box;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BoxController extends Controller
{
    public function index()
    {
        $nim = Auth::user()->nim;
        $box = Box::where('nim', $nim)->with('barang')->get();

        return Inertia::render('Box/Index', [
            'box' => $box,
        ]);  
    }

    public function confirm(Request $request)
{
    $selectedBox = $request->input('selectedBox');

    return Inertia::render('Box/Confirm', [
        'selectedBox' => $selectedBox
    ]);
}

    public function store(Request $request)
    {    
        $validated = $request->validate([
            'barang_id' => 'required|integer|min:1',
            'quantity' => 'required|integer|min:1',
        ]);

        $user = Auth::user()->nim;

        Box::create([
            'nim' => $user,
            'barang_id' => $validated['barang_id'],
            'quantity' => $validated['quantity'],
        ]);


        return redirect()->route('box.index')->with('success', 'Barang berhasil diupdate!');
    }
}
