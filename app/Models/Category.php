<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nama',      // Berubah dari 'name'
        'deskripsi', // Berubah dari 'description'
    ];

    public function medicines(): HasMany
    {
        return $this->hasMany(Medicine::class);
    }
}