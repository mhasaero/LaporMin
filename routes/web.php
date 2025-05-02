<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BoxController;
use App\Http\Controllers\PeminjamanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PengaduanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::post('/', [BoxController::class, 'store'])->name('home.store');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/admin/peminjaman-approval', [PeminjamanController::class, 'showApproval'])->name('admin.peminjaman.approval');
    Route::post('/admin/peminjaman-approval/{peminjaman}/approve', [PeminjamanController::class, 'approve'])->name('admin.peminjaman.approve');
    Route::post('/admin/peminjaman-approval/{peminjaman}/reject', [PeminjamanController::class, 'reject'])->name('admin.peminjaman.reject');

    Route::get('/admin/pengembalian-approval', [PeminjamanController::class, 'showReturnApproval'])->name('admin.pengembalian.approval');
    Route::post('/admin/pengembalian-approval/{peminjaman}/approve', [PeminjamanController::class, 'return'])->name('admin.pengembalian.approve');

    Route::get('/peminjaman', [PeminjamanController::class, 'index'])->name('peminjaman.index');
    Route::get('/peminjaman/create', [PeminjamanController::class, 'create'])->name('peminjaman.create');
    Route::post('/peminjaman', [PeminjamanController::class, 'store'])->name('peminjaman.store');

    Route::post('/barang', [BarangController::class, 'store']);
    Route::put('/barang/{id}', [BarangController::class, 'update']);
    Route::delete('/barang/{id}', [BarangController::class, 'destroy']);
});

Route::get('/box', [BoxController::class, 'index'])->name('box.index');
Route::post('/box-confirm', [BoxController::class, 'confirm'])->name('box.confirm');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/ubahpassword', [ProfileController::class, 'ubahpassword'])->name('profile.ubahpassword');
    Route::get('/pinjamanSaya', [ProfileController::class, 'pinjamanSaya'])->name('profile.pinjamanSaya'); //tes
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/pengaduan', [PengaduanController::class, 'store'])->name('pengaduan.store');

require __DIR__.'/auth.php';
