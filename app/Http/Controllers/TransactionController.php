<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
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
    }

    public function storePembayaran(Request $request)
    {
        // 1. Validasi input dari React
        $request->validate([
            'toko' => 'required|string',
            'paket' => 'required|string',
        ]);

        // 2. Tentukan harga berdasarkan toko dan paket yang dipilih
        $amount = 0;
        if ($request->toko === 'Koperasi Desa Sejahtera') {
            if ($request->paket === 'Paket A Lengkap') {
                $amount = 50000;
            } elseif ($request->paket === 'Paket B Standar') {
                $amount = 25000;
            }
        } elseif ($request->toko === 'Toko Sembako Makmur') {
            if ($request->paket === 'Paket A Lengkap') {
                $amount = 100000;
            } elseif ($request->paket === 'Paket B Standar') {
                $amount = 50000;
            }
        }

        // 3. Cek apakah saldo cukup
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $masuk = $user->transactions()->where('type', 'in')->sum('amount');
        $keluar = $user->transactions()->where('type', 'out')->sum('amount');
        $totalSaldo = $masuk - $keluar;

        if ($totalSaldo < $amount) {
            // Jika saldo kurang, kembalikan error
            return back()->withErrors(['saldo' => 'Maaf, saldo Anda tidak mencukupi untuk pembayaran ini.']);
        }

        // 4. Jika saldo cukup, simpan ke database 'transactions'
        // 'title' diisi nama toko, 'category' diisi nama paket, 'type' pastinya 'out'
        $user->transactions()->create([
            'title' => $request->toko,
            'category' => $request->paket,
            'amount' => $amount,
            'type' => 'out',
        ]);

        // 5. Arahkan pengguna ke halaman riwayat transaksi
        // Ganti 'user.riwayat' dengan nama route halaman riwayatmu jika berbeda
        return redirect('/user/riwayat'); 
    }
}