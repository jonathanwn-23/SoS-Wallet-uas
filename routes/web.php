<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\AdminRiwayatController;

// mengatur riwayat keuangan user di dashboard admin
Route::get('/admin/riwayat-keuangan', [AdminRiwayatController::class, 'index'])->name('admin.riwayat');

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Mengarahkan URL /dashboard ke DashboardController
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::resource('posts', PostController::class)->middleware('auth');

Route::get('/riwayat', function () {
    return Inertia::render('riwayat_keuangan');
})->name('riwayat');

require __DIR__.'/settings.php';


Route::get('/login-user', function () {
    // Alamat harus sesuai folder: auth (kecil), User (besar), UserLogin (besar)
    return Inertia::render('auth/User/UserLogin'); 
})->name('user.login');

// Tambahkan baris ini di tempat kamu mendeklarasikan rute User
Route::post('/user/pembayaran', [App\Http\Controllers\TransactionController::class, 'storePembayaran'])->name('user.pembayaran.store');

// menyimpan riwayat keuangan user
Route::get('/user/riwayat', [\App\Http\Controllers\TransactionController::class, 'riwayat'])->name('user.riwayat');

// menyimpan login pada fitur pembayaran user
Route::get('/user/pembayaran', [\App\Http\Controllers\TransactionController::class, 'pembayaran']);

// menampilkan tampilan dashboard user ketika berhasil login
Route::get('/user/dashboard', [UserDashboardController::class, 'index']);

// menampilkan saldo user yang tersedia
Route::get('/user/saldo', [\App\Http\Controllers\TransactionController::class, 'saldo']);

// membuat tampilan update sederhana
Route::get('/user/update', function () {
        return Inertia::render('User/Update', [
            'app_version' => 'v1.0.5', // Data versi aplikasi
            'last_sync' => '20/04/2026', // Data tanggal update terakhir
        ]);
    });

// fungsi login user harus pakai NIK tervalidasi
Route::post('/login-user', function (Request $request) {
    // 1. Validasi input NIK harus ada
    $request->validate(['nik' => 'required|string']);

    // 2. Cari data di database
    $user = User::where('nik', $request->nik)->where('role', 'user')->first();

    // 3. Jika ketemu, Cek statusnya.
    if ($user) {
        
        // Lapis Keamanan Tambahan:
        if ($user->status === 'Validated') {
            // Jika Validated, baru izinkan masuk
            Auth::login($user);
            $request->session()->regenerate();
            
            // Arahkan ke rute dashboard/riwayat khusus user
            return redirect('/user/dashboard');
        } else {
            // Jika Pending atau Rejected, tolak masuk!
            return back()->withErrors(['nik' => 'Mohon maaf, akun Anda berstatus ' . $user->status . ' dan belum dapat mengakses sistem.']);
        }
    }

    // 4. Jika NIK salah, tidak ada di database, atau bukan user
    return back()->withErrors(['nik' => 'NIK tidak ditemukan atau Anda tidak memiliki akses.']);
});

// membuat user logout hanya ke tampilan login user tanpa ke tampilan log admin
Route::post('/user/logout', function (\Illuminate\Http\Request $request) {
    // 1. Keluarkan user dari sistem
    Auth::logout();

    // 2. Hapus sesi dan token keamanan (Wajib untuk keamanan)
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    // 3. Arahkan kembali ke halaman login khusus user
    return redirect('/login-user');
});