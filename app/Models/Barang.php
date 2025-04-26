<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class Barang extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    protected $table = 'barang';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nama_barang',
        'kategori',
        'deskripsi',
        'stok',
        'status',
        'lokasi',
    ];

    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class, 'barang_id');
    }

    public function status()
    {
        // return $this->belongsTo(StatusBarang::class, 'status_id');
        return $this->hasOne(StatusBarang::class, 'barang_id');
    }

}
