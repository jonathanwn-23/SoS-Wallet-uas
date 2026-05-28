<?php

namespace App\Http\Controllers;

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
        return Inertia::render('User/UserDashboard', [
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
        $userId = \Illuminate\Support\Facades\Auth::id();

        // 1. LOGIKA SALDO (Sudah Berjalan Sempurna)
        $pemasukan = \App\Models\Transaction::where('user_id', $userId)->where('type', 'in')->sum('amount');
        $pengeluaran = \App\Models\Transaction::where('user_id', $userId)->where('type', 'out')->sum('amount');
        
        $totalSaldoNyata = $pemasukan - $pengeluaran;


        // 2. LOGIKA TANGGAL (Diperbarui agar kebal error)
        $lastTransaction = \App\Models\Transaction::where('user_id', $userId)
                            ->where('type', 'in')
                            ->orderBy('created_at', 'desc')
                            ->first();

        // Menggunakan date(strtotime()) agar pasti berhasil meskipun format database berupa string biasa
        if ($lastTransaction) {
            $tanggalDiterima = date('d/m/Y', strtotime($lastTransaction->created_at));
        } else {
            $tanggalDiterima = 'Belum ada dana masuk';
        }


        // 3. KIRIM KE REACT
        return \Inertia\Inertia::render('User/Saldo', [
            'hitungSaldo' => $totalSaldoNyata, 
            
            // PASTIKAN NAMA VARIABEL DI BAWAH INI ADALAH 'tanggal_terima' 
            // agar bisa ditangkap oleh file Saldo.jsx
            'tanggal_terima' => $tanggalDiterima 
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