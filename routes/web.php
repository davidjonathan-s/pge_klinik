<?php

use Illuminate\Support\Facades\Route;

// Redirect halaman utama langsung ke halaman login
Route::get('/', function () {
    return redirect()->route('login');
});

// Rute dashboard bawaan Breeze (Nanti akan kita sesuaikan di Tahap 4)
Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';