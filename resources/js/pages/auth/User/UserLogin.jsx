import React from "react";
import { Head, useForm, Link } from '@inertiajs/react';

const UserLogin = () => {
    // 1. LOGIKA BAWAAN: Form state dan fungsi submit dipertahankan sepenuhnya
    const { data, setData, post, processing, errors } = useForm({
        nik: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login-user");
    };

    return (
        <>
            <Head title="Login User - SOS-WALLET" />
            
            {/* Wadah Utama: Background abu-abu sangat muda/putih */}
            <div className="min-h-screen flex w-full font-sans bg-[#f8fcfc] relative overflow-hidden">

                {/* ===== DEKORASI BACKGROUND (Lingkaran Tipis Kanan) ===== */}
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full border-[15px] border-[#e0f7fa] opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-[-100px] right-[10%] w-80 h-80 rounded-full border-[15px] border-[#e0f7fa] opacity-60 pointer-events-none"></div>

                {/* ================= BAGIAN KIRI (Background Biru & Gambar 3D) ================= */}
                <div className="hidden lg:flex w-1/2 bg-[#0055b3] flex-col justify-center items-center relative">
                    
                    {/* Memanggil gambar 3D dari folder public */}
                    <img 
                        src="/payment.png" 
                        alt="3D Wallet Security" 
                        className="w-[85%] max-w-xl object-contain drop-shadow-2xl z-10  transition-transform duration-500"
                    />
                </div>

                {/* ================= BAGIAN KANAN (Formulir Login Tanpa Kotak) ================= */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 relative z-10">
                    <div className="w-full max-w-sm flex flex-col items-center text-center">

                        {/* Judul: SOS-WALLET dengan efek outline tebal */}
                        <h1
                            className="text-4xl md:text-5xl font-black tracking-[0.2em] mb-12 text-white whitespace-nowrap"
                            style={{
                                WebkitTextStroke: '2px black',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            SOS-WALLET
                        </h1>

                        {/* Formulir Login */}
                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

                            {/* Label NIK */}
                            <label htmlFor="nik" className="text-sm font-bold text-gray-800 mb-3">
                                Masukkan Nomor Induk Kependudukan (NIK)
                            </label>

                            {/* Kolom Input NIK */}
                            <input
                                id="nik"
                                type="text"
                                inputMode="numeric"
                                value={data.nik}
                                // Logika asli dikembalikan: hanya menerima angka dan maksimal 16 karakter
                                onChange={(e) => setData("nik", e.target.value.replace(/\D/g, '').slice(0, 16))}
                                placeholder="Silahkan Masukkan NIK"
                                className="w-full px-4 py-3 bg-[#f2f2f2] border border-gray-400 rounded-md text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0055b3] mb-6"
                                required
                            />
                            
                            {/* Pesan Error (jika ada NIK salah) */}
                            {errors.nik && (
                                <div className="text-red-500 text-sm mb-4 w-full text-left">
                                    {errors.nik}
                                </div>
                            )}

                            {/* Tombol Login Biru Tua */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#003d82] text-white font-bold py-3 rounded-md hover:bg-[#002b5e] transition duration-200"
                            >
                                Login
                            </button>

                        </form>

                        {/* Link Kembali ke halaman utama */}
                        <div className="mt-12">
                            <Link 
                                href="/" 
                                className="text-xs font-bold text-gray-600 hover:text-black transition duration-200"
                            >
                                Kembali ke halaman utama?
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

// Menonaktifkan layout bawaan agar desain bisa terbentang penuh (full-screen)
UserLogin.layout = (page) => <>{page}</>;

export default UserLogin;