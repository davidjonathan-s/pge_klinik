<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')
                ->constrained('medicines')
                ->cascadeOnUpdate()
                ->restrictOnDelete();
            $table->enum('tipe_transaksi', ['Masuk', 'Keluar', 'Adjustment']);
            $table->integer('jumlah');
            $table->integer('stok_sebelum');
            $table->integer('stok_sesudah');
            $table->string('keterangan', 255)->nullable();
            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->timestamp('created_at')->useCurrent();

            $table->index('medicine_id');
            $table->index('created_at');
            $table->index('tipe_transaksi');
        });

        DB::statement('ALTER TABLE stock_transactions ADD CONSTRAINT chk_stock_transactions_stok_sebelum CHECK (stok_sebelum >= 0)');
        DB::statement('ALTER TABLE stock_transactions ADD CONSTRAINT chk_stock_transactions_stok_sesudah CHECK (stok_sesudah >= 0)');
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_transactions');
    }
};
