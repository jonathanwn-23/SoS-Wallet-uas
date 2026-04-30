<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
            // Menghitung HANYA akun yang memiliki role 'user'
            $totalPenerima = User::where('role', 'user')->count();

            // Menghitung berdasarkan status masing-masing
            $totalValidated = User::where('role', 'user')->where('status', 'Validated')->count();
            $totalPending   = User::where('role', 'user')->where('status', 'Pending')->count();
            $totalRejected  = User::where('role', 'user')->where('status', 'Rejected')->count();

            // Menghitung total dana tersalurkan (type 'in') khusus user yang 'Validated'
            $totalDanaTersalurkan = Transaction::where('type', 'in')
                ->whereHas('user', function($query) {
                    $query->where('status', 'Validated');
                })
                ->sum('amount');

            // Melempar data ke tampilan React (Inertia)
            return Inertia::render('dashboard', [
                'totalPenerima'  => $totalPenerima,
                'totalValidated' => $totalValidated,
                'totalPending'   => $totalPending,
                'totalRejected'  => $totalRejected,
                'totalDanaTersalurkan' => $totalDanaTersalurkan,
            ]);

        }
    }

   