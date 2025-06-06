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
        Schema::create('box', function (Blueprint $table) {
            $table->id();
            $table->string('nim');
            $table->unsignedBigInteger('barang_id');
            $table->integer('quantity');
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('nim')->references('nim')->on('users')->onDelete('cascade');
            $table->foreign('barang_id')->references('id')->on('barang')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('box');
    }
};