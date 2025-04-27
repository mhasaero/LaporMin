<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RiwayatPeminjaman extends Model
{
    use HasFactory;

    protected $table = 'riwayat_peminjaman';

    protected $fillable = [
        'peminjaman_id',
        'tanggal_pengembalian',
    ];

    public function peminjaman()
    {
        return $this->belongsTo(Peminjaman::class);
    }
}