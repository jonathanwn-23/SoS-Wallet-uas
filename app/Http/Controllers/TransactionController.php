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
}