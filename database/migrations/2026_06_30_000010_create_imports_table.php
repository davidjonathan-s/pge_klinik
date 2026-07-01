<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('imports', function (Blueprint $table) {
            $table->id();
            $table->string('filename', 255);
            $table->integer('total_data')->default(0);
            $table->integer('sukses')->default(0);
            $table->integer('gagal')->default(0);
            $table->foreignId('imported_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->timestamp('imported_at')->useCurrent();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('imports');
    }
};
