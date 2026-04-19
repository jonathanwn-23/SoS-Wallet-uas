<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function riwayat()
    {
        return Inertia::render('User/History', [
            'transactions' => Auth::user()->transactions()->latest()->get()
        ]);
    }

    public function saldo()
    {
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
        $user = Auth::user();
        
        $masuk = $user->transactions()->where('type', 'in')->sum('amount');
        $keluar = $user->transactions()->where('type', 'out')->sum('amount');
        $totalSaldo = $masuk - $keluar;

        return Inertia::render('Pembayaran', [
            'saldoSekarang' => $totalSaldo
        ]);
    }
}