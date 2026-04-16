<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Menghitung data dari database berdasarkan status
        $totalPenerima = Post::count();
        $totalRejected = Post::where('status', 'Rejected')->count();
        $totalPending = Post::where('status', 'Pending')->count();
        $totalValidated = Post::where('status', 'Validated')->count();

        // Mengirim data ke file dashboard.tsx
        return Inertia::render('dashboard', [
            'totalPenerima' => $totalPenerima,
            'totalRejected' => $totalRejected,
            'totalPending' => $totalPending,
            'totalValidated' => $totalValidated,
        ]);
    }
    }

   