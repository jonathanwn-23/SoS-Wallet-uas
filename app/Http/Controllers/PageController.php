<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class PageController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function update()
    {
        return Inertia::render('Update', [
            'app_version' => 'v1.0.4-Stable',
            'last_sync' => '05 April 2026',
            'changes' => [
                ['fitur' => 'Integrasi Database Laravel & React Inertia', 'status' => 'Selesai'],
                ['fitur' => 'Logika Perhitungan Saldo Otomatis (Masuk - Keluar)', 'status' => 'Selesai'],
                ['fitur' => 'Halaman Riwayat Transaksi Dinamis dari Database', 'status' => 'Selesai'],
                ['fitur' => 'Sistem Keamanan Login Menggunakan NIK', 'status' => 'Selesai'],
            ]
        ]);
    }
}