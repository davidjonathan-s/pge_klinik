<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_predictions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')
                ->constrained('medicines')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->decimal('rata_penggunaan_bulanan', 10, 2)->default(0);
            $table->date('estimasi_habis')->nullable();
            $table->boolean('rekomendasi_restock')->default(false);
            $table->integer('jumlah_disarankan')->default(0);
            $table->date('tanggal_analisis');
            $table->timestamp('created_at')->useCurrent();

            $table->index('medicine_id');
            $table->index('tanggal_analisis');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_predictions');
    }
};
