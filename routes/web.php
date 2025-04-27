<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BoxController;
use App\Http\Controllers\PeminjamanController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::post('/', [BoxController::class, 'store'])->name('home.store');

Route::get('/inventaris', function () {
    return Inertia::render('Dashboard/Inventaris');
})->name('inventaris');

// Route::get('/barang', [BarangController::class, 'index'])->name('barang.index');
// Route::get('/barang/create', [BarangController::class, 'create'])->name('barang.create');
// Route::post('/barang', [BarangController::class, 'store'])->name('barang.store');
// Route::put('/barang/{barang}', [BarangController::class, 'update'])->name('barang.update');
// Route::delete('/barang/{barang}', [BarangController::class, 'destroy'])->name('barang.destroy');

Route::get('/pengaduan', function () {
    return Inertia::render('Dashboard/Pengaduan');
})->name('pengaduan');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');


Route::get('/box', [BoxController::class, 'index'])->name('box.index');
Route::post('/box-confirm', [BoxController::class, 'confirm'])->name('box.confirm');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/ubahpassword', [ProfileController::class, 'ubahpassword'])->name('profile.ubahpassword');
    Route::get('/pinjamanSaya', [ProfileController::class, 'pinjamanSaya'])->name('profile.pinjamanSaya'); //tes
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/peminjaman', [PeminjamanController::class, 'index'])->name('peminjaman.index');
Route::get('/peminjaman/create', [PeminjamanController::class, 'create'])->name('peminjaman.create');
Route::post('/peminjaman', [PeminjamanController::class, 'store'])->name('peminjaman.store');

Route::post('/peminjaman/{peminjaman}/approve', [PeminjamanController::class, 'approve'])->name('peminjaman.approve');
Route::post('/peminjaman/{peminjaman}/reject', [PeminjamanController::class, 'reject'])->name('peminjaman.reject');
Route::post('/peminjaman/{peminjaman}/return', [PeminjamanController::class, 'return'])->name('peminjaman.return');

Route::post('/barang', [BarangController::class, 'store']);
Route::put('/barang/{id}', [BarangController::class, 'update']);
Route::delete('/barang/{id}', [BarangController::class, 'destroy']);


require __DIR__.'/auth.php';
