<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class WalletController extends Controller
{
    public function pembayaran()
    {
        $user = Auth::user();
        
        // Hitung saldo seperti biasa
        $masuk = $user->transactions()->where('type', 'in')->sum('amount');
        $keluar = $user->transactions()->where('type', 'out')->sum('amount');
        $totalSaldo = $masuk - $keluar;

        return Inertia::render('User/Pembayaran', [
            'saldoSekarang' => $totalSaldo
        ]);
    }
}