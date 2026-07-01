<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nama', // Berubah dari 'name', short_name dihapus karena tidak ada di migrasi
    ];

    public function medicines(): HasMany
    {
        return $this->hasMany(Medicine::class);
    }
}