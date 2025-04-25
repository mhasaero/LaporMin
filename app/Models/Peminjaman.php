<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Peminjaman extends Model
{
    use HasFactory;

    protected $table = 'peminjaman';

    protected $fillable = [
        'nim',
        'barang_id',
        'tanggal_peminjaman',
        'alasan',
        'ruangan',
        'tanggal_disetujui',
        'tanggal_pengembalian',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'nim', 'nim');
    }

    public function barang()
    {
        return $this->belongsTo(Barang::class, 'barang_id');
    }
}