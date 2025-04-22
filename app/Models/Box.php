<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Box extends Model
{
    use HasFactory;

    protected $table = 'box';

    protected $fillable = [
        'nim',
        'barang_id',
        'quantity',
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