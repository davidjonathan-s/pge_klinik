<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->string('kode_obat', 50)->unique();
            $table->string('barcode', 100)->unique()->nullable();
            $table->string('nama_obat', 200);

            $table->foreignId('kategori_id')
                ->constrained('categories')
                ->cascadeOnUpdate()
                ->restrictOnDelete();
            $table->foreignId('satuan_id')
                ->constrained('units')
                ->cascadeOnUpdate()
                ->restrictOnDelete();
            $table->foreignId('supplier_id')
                ->nullable()
                ->constrained('suppliers')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignId('lokasi_id')
                ->nullable()
                ->constrained('storage_locations')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->integer('stok')->default(0);
            $table->integer('stok_minimum')->default(0);
            $table->integer('stok_maksimum')->default(0);
            $table->integer('kebutuhan_bulanan')->default(0);
            $table->decimal('harga_beli', 15, 2)->default(0);
            $table->decimal('harga_jual', 15, 2)->default(0);
            $table->date('expired_date')->nullable();
            $table->enum('status', ['aktif', 'nonaktif'])->default('aktif');
            $table->softDeletes();
            $table->timestamps();

            $table->index('kode_obat');
            $table->index('barcode');
            $table->index('nama_obat');
            $table->index('expired_date');
            $table->index('kategori_id');
            $table->index('stok');
            $table->index('created_at');
        });

        // CHECK constraints (MySQL 8+) - ditambahkan via raw statement
        // karena belum didukung langsung oleh Blueprint di semua versi Laravel.
        DB::statement('ALTER TABLE medicines ADD CONSTRAINT chk_medicines_stok CHECK (stok >= 0)');
        DB::statement('ALTER TABLE medicines ADD CONSTRAINT chk_medicines_stok_minimum CHECK (stok_minimum >= 0)');
        DB::statement('ALTER TABLE medicines ADD CONSTRAINT chk_medicines_stok_maksimum CHECK (stok_maksimum >= stok_minimum)');
    }

    public function down(): void
    {
        Schema::dropIfExists('medicines');
    }
};
