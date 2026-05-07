<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRiwayatController extends Controller
{
    public function index()
    {
        // 1. Ambil semua user yang berstatus 'Validated'
        $users = User::where('status', 'Validated')
            ->get()
            ->map(function ($user) {
                // 2. Hitung Total Pemasukkan (In)
                $pemasukkan = $user->transactions()->where('type', 'in')->sum('amount');
                
                // 3. Hitung Total Pengeluaran (Out)
                $pengeluaran = $user->transactions()->where('type', 'out')->sum('amount');
                
                // 4. Hitung Sisa Saldo (Sesuai logikamu: In - Out)
                $sisaSaldo = $pemasukkan - $pengeluaran;

                // 5. Kembalikan data yang sudah dihitung untuk ditampilkan di React
                return [
                    'id' => $user->id,
                    'name' => $user->name, // Ganti dengan 'receipient_validation' jika menggunakan nama itu
                    'pemasukkan' => $pemasukkan,
                    'sisa_saldo' => $sisaSaldo,
                ];
            });

        // 6. Kirim data ke file React yang ada di folder resources/js/Pages/...
        return Inertia::render('riwayat_keuangan', [
            'riwayatUsers' => $users
        ]);
    }
}