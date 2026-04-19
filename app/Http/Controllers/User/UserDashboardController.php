<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
// use App\Models\Transaction; // Aktifkan jika sudah ada model transaksi

class UserDashboardController extends Controller
{
    // 1. Dashboard Utama 
    public function index()
    {
        return Inertia::render('User/Dashboard', [
            'auth' => ['user' => Auth::user()]
        ]);
    }

    // 2. Riwayat Transaksi 
    public function riwayat()
    {
        // Simulasi data transaksi, nanti ganti dengan: Transaction::where('user_id', Auth::id())->get();
        $transactions = [
            ['id' => 1, 'title' => 'Beli Sembako', 'category' => 'Belanja', 'type' => 'out', 'amount' => 50000, 'created_at' => now()],
            ['id' => 2, 'title' => 'Top Up Saldo', 'category' => 'Transfer', 'type' => 'in', 'amount' => 100000, 'created_at' => now()],
        ];

        return Inertia::render('User/History', [
            'transactions' => $transactions
        ]);
    }

    // 3. Menu Pembayaran QR 
    public function pembayaran()
    {
        return Inertia::render('User/Pembayaran', [
            'saldoSekarang' => 150000 // Nanti ambil dari kolom 'balance' di tabel users
        ]);
    }

    // 4. Cek Saldo Detail
    public function saldo()
    {
        return Inertia::render('User/Saldo', [
            'hitungSaldo' => 150000 // Logika perhitungan saldo masuk - keluar
        ]);
    }

    // 5. Pembaruan Sistem 
    public function update()
    {
        return Inertia::render('User/Update', [
            'app_version' => 'v2.0.4-stable',
            'last_sync' => now()->format('d M Y, H:i'),
            'changes' => ['Perbaikan UI Dark Mode', 'Optimasi Login NIK']
        ]);
    }
}