<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')
                ->constrained('medicines')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->enum('tipe_notifikasi', [
                'Stock Habis',
                'Stock Menipis',
                'Restock',
                'Expired',
                'Akan Expired',
            ]);
            $table->string('pesan', 255);
            $table->boolean('status_baca')->default(false);
            $table->timestamp('created_at')->useCurrent();

            $table->index('medicine_id');
            $table->index('status_baca');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
