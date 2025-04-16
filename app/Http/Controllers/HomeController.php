<?php

namespace App\Http\Controllers;

use App\Models\StatusBarang;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $statusBarang = StatusBarang::with(['status_barang', 'barang'])->latest()->get();

        return Inertia::render('Home/Home', [
            'statusBarang' => $statusBarang,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
            
    }
}
