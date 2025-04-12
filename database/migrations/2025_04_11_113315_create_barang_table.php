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
        Schema::create('barang', function (Blueprint $table) {
            $table->id('id');
            $table->string('nama_barang');
            $table->string('kategori');
            $table->text('deskripsi')->nullable();
            $table->integer('stok');
            $table->enum('status', ['Tersedia', 'Sedang Dipinjam', 'Rusak'])->default('Tersedia');
            $table->string('lokasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barang');
    }
};
