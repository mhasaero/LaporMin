<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pengaduan extends Model
{
    use HasFactory;

    protected $table = 'pengaduan';

    protected $fillable = [
        'name',
        'msg',
        'link_gambar',
    ];

    // Cast agar 'link_gambar' otomatis jadi array
    protected $casts = [
        'link_gambar' => 'array',
    ];
}
