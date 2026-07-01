<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medicine_usage', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')
                ->constrained('medicines')
                ->cascadeOnUpdate()
                ->restrictOnDelete();
            $table->integer('jumlah');
            $table->date('tanggal');
            $table->string('keterangan', 255)->nullable();
            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->timestamp('created_at')->useCurrent();

            $table->index('medicine_id');
            $table->index('tanggal');
        });

        DB::statement('ALTER TABLE medicine_usage ADD CONSTRAINT chk_medicine_usage_jumlah CHECK (jumlah >= 0)');
    }

    public function down(): void
    {
        Schema::dropIfExists('medicine_usage');
    }
};
