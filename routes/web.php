<?php

use Inertia\Inertia;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Models\Post;
use App\Http\Controllers\DashboardController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Mengarahkan URL /dashboard ke DashboardController
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::resource('posts', PostController::class)->middleware('auth');

Route::get('/riwayat', function () {
    return Inertia\Inertia::render('riwayat_keuangan');
})->name('riwayat');

require __DIR__.'/settings.php';


Route::get('/login-user', function () {
    // Alamat harus sesuai folder: auth (kecil), User (besar), UserLogin (besar)
    return Inertia::render('auth/User/UserLogin'); 
})->name('user.login');

Route::get('/user/riwayat', [UserDashboardController::class, 'riwayat'])->name('user.riwayat');