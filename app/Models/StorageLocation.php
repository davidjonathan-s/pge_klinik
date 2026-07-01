<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class StorageLocation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nama_lokasi', // Berubah dari 'name'
        'deskripsi',   // Berubah dari 'description'
    ];

    public function medicines(): HasMany
    {
        return $this->hasMany(Medicine::class);
    }
}