<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    // 1. Fungsi untuk menampilkan halaman form Top Up
    public function topupForm()
    {
        // Ambil data user yang berstatus 'Validated'
        $users = \App\Models\User::where('status', 'Validated')->get(['id', 'name', 'nik']);

        // Mengambil 6 transaksi 'in' (Top Up) terakhir untuk riwayat
        // Mengambil SEMUA transaksi 'in' (Top Up) terakhir untuk riwayat
        $recentTransactions = \App\Models\Transaction::with('user')
            ->where('type', 'in')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function($trx) {
                return [
                    'id' => $trx->id,
                    'category' => $trx->category,
                    'user_name' => $trx->user ? $trx->user->name : 'Unknown',
                    'created_at_formatted' => \Carbon\Carbon::parse($trx->created_at)->translatedFormat('d M Y, H:i'),
                    'amount_formatted' => '+' . number_format($trx->amount, 0, ',', '.')
                ];
            });

        // Mengarahkan ke file React bernama 'topup.tsx'
        return inertia('topup', [
            'users' => $users,
            'recentTransactions' => $recentTransactions
        ]);
    }

    public function storeTopup(\Illuminate\Http\Request $request)
    {
        // 1. Validasi inputan form Top Up
        $request->validate([
            'user_id' => 'required',
            'title' => 'required|string',
            'category' => 'required|string',
            'amount' => 'required|numeric',
        ]);

        // 2. Cara Anti-Gagal menyimpan ke Database
        $transaction = new \App\Models\Transaction();
        $transaction->user_id = $request->user_id;
        $transaction->title = $request->title;
        $transaction->category = $request->category;
        $transaction->amount = $request->amount;
        $transaction->type = 'in'; // Pastikan tipenya 'in'
        $transaction->save(); // Eksekusi simpan ke MySQL

        // 3. Kembali ke halaman sebelumnya
        return redirect()->back();
    }

    public function riwayat()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        return Inertia::render('User/History', [
            'transactions' => $user->transactions()->latest()->get()
        ]);
    }

    public function saldo()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        $masuk = $user->transactions()->where('type', 'in')->sum('amount');
        $keluar = $user->transactions()->where('type', 'out')->sum('amount');
        $totalSaldo = $masuk - $keluar;

        return Inertia::render('User/Saldo', [
            'hitungSaldo' => $totalSaldo
        ]);
    }

    public function pembayaran()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        $masuk = $user->transactions()->where('type', 'in')->sum('amount');
        $keluar = $user->transactions()->where('type', 'out')->sum('amount');
        $totalSaldo = $masuk - $keluar;

        return Inertia::render('User/Pembayaran', [
            'saldoSekarang' => $totalSaldo
        ]);
    } // <-- INI DIA PENUTUP YANG HILANG SEBELUMNYA

    public function storePembayaran(\Illuminate\Http\Request $request)
    {
        // 1. Validasi Ketat Data dari React
        $request->validate([
            'toko' => 'required|string|max:255',
            'paket' => 'required|string|max:255',
            'amount' => 'required|numeric|min:1', // Mencegah user mengirim nilai 0 atau negatif
        ]);

        $userId = \Illuminate\Support\Facades\Auth::id();

        // 2. Fitur Keamanan: Pengecekan Saldo Real-time
        $pemasukan = \App\Models\Transaction::where('user_id', $userId)->where('type', 'in')->sum('amount');
        $pengeluaran = \App\Models\Transaction::where('user_id', $userId)->where('type', 'out')->sum('amount');
        $saldoSekarang = $pemasukan - $pengeluaran;

        if ($saldoSekarang < $request->amount) {
            // Jika saldo kurang, kembalikan ke halaman sebelumnya dengan pesan error
            return redirect()->back()->withErrors([
                'message' => 'Transaksi gagal: Saldo Anda tidak mencukupi untuk membeli ' . $request->paket
            ]);
        }

        // 3. Eksekusi Penyimpanan ke Database MySQL
        $transaction = new \App\Models\Transaction();
        $transaction->user_id = $userId;
        $transaction->title = $request->toko;          
        $transaction->category = $request->paket;      
        $transaction->amount = $request->amount;       
        $transaction->type = 'out';                    
        $transaction->save();

        // 4. Redirect cerdas setelah sukses
        return redirect('/user/riwayat')->with('success', 'Pembayaran sebesar Rp ' . number_format($request->amount, 0, ',', '.') . ' berhasil dilakukan.');
    }
}