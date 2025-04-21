<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusBarang extends Model
{
    use HasFactory;

    protected $table = 'status_barang';

    protected $fillable = [
        'barang_idk',
        'status_tersedia',
        'status_sedang_dipinjam',
        'status_rusa',
    ];

    public function barang()
    {
        return $this->belongsTo(Barang::class);
    }

    public function status_barang()
    {
        return $this->belongsTo(Barang::class, 'barang_id', 'id');
    }
}