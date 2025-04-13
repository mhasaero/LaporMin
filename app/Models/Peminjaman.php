<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class, 'user_nim', 'nim');
    }

    public function barang()
    {
        return $this->belongsTo(Barang::class, 'barang_id');
    }

}
