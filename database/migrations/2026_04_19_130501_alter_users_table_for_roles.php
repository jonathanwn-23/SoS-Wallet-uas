<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Tambahkan kolom role (default: user)
            $table->string('role')->default('user')->after('id');

            // Karena user biasa hanya login pakai NIK, email dan password boleh kosong
            $table->string('email')->nullable()->change();
            $table->string('password')->nullable()->change();

            // Pastikan kolom nama penerima dan status dari tabel posts dipindah ke sini
            $table->string('name')->nullable()->change(); // Ubah jadi nullable jaga-jaga
            // NIK seharusnya sudah ada dari migrasi sebelumnya
            $table->string('status')->default('Pending')->after('nik');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'status']);
            $table->string('email')->nullable(false)->change();
            $table->string('password')->nullable(false)->change();
        });
    }
};
