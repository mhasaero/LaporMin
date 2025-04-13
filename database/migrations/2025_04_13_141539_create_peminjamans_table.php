<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('peminjamans', function (Blueprint $table) {
            $table->id();

            // Relasi ke tabel users (nim sebagai PK)
            $table->string('user_nim');
            $table->foreign('user_nim')->references('nim')->on('users')->onDelete('cascade');

            // Relasi ke tabel barangs (id sebagai PK)
            $table->unsignedBigInteger('barang_id');
            $table->foreign('barang_id')->references('id')->on('barang')->onDelete('cascade');

            $table->date('tanggal_peminjaman');
            $table->date('tanggal_pengembalian')->nullable();
            $table->enum('status', ['Sedang Dipinjam', 'Sudah Dikembalikan', 'Pengajuan Ditolak', 'Belum Diproses'])->default('Belum Diproses');
            $table->text('alasan')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjamans');
    }
};
