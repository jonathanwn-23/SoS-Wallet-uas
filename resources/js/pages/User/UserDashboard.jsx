import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <div className="min-h-screen bg-[#f8fbfa] relative overflow-hidden font-sans">
            <Head title="Dashboard User" />

            {/* ================= ORNAMEN BACKGROUND ================= */}
            <div className="absolute top-[10%] right-[-5%] w-64 h-64 border-[30px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 border-[40px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[-5%] right-[20%] w-40 h-40 border-[20px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none"></div>

            {/* ================= NAVBAR ATAS ================= */}
            <nav className="w-full px-8 lg:px-16 py-5 flex items-center justify-between bg-transparent relative z-20">
                <div className="text-[#1a56db] font-black text-2xl tracking-wider">
                    SOS-WALLET
                </div>

                <div className="hidden lg:flex items-center gap-2 lg:gap-4 font-bold text-gray-700 text-sm">
                    {/* Menu Aktif: Beranda */}
                    <Link href="/user/dashboard" className="px-4 py-2 text-black border-b-2 border-black">
                        Beranda
                    </Link>
                    
                    {/* Menu Lainnya dengan efek hover kapsul biru */}
                    <Link href="/user/saldo" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">
                        Cek Saldo
                    </Link>
                    <Link href="/user/pembayaran" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">
                        Pembayaran
                    </Link>
                    <Link href="/user/riwayat" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">
                        Riwayat
                    </Link>
                    <Link href="/user/update" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">
                        Update
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-800">{auth.user.name}</span>
                    <Link
                        href="/user/logout"
                        method="post"
                        as="button"
                        className="text-red-500 hover:text-red-700 transition-colors flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                </svg>
                                            </Link>
                </div>
            </nav>

            {/* ================= KONTEN UTAMA ================= */}
            <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 lg:py-16 max-w-[1500px] mx-auto gap-8">

                {/* Kolom Kiri */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
                    <h1 className="text-5xl lg:text-[60px] font-black leading-[1.1] text-black tracking-tight">
                        Selamat datang <br/> di SOS-WALLET <br/>
                        <span className="uppercase">{auth.user.name} !</span>
                    </h1>

                    {/* Teks tetap dipertahankan besar agar mudah dibaca */}
                    <p className="text-gray-600 text-[18px] leading-relaxed max-w-lg font-medium mt-2">
                        Kelola dana yang diberikan pemerintah anda dengan kejelasan dan keamanan mutlak, tanpa perantara. Akses saldo Anda, lacak pengeluaran terbaru, dan temukan pengecer resmi, semuanya dalam satu pusat terpadu.
                    </p>

                    <Link
                        href="/user/saldo"
                        className="bg-[#0047a5] hover:bg-[#002b66] text-white font-semibold py-3.5 px-9 rounded-xl transition-all mt-4 text-base"
                    >
                        Cek Saldomu
                    </Link>
                </div>

                {/* Kolom Kanan: Komposisi Gambar 3D (Animasi Naik-Turun & Koin Mentok Kanan) */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
                    
                    {/* CSS Kustom untuk Animasi Naik-Turun yang sangat halus */}
                    <style>
                        {`
                        @keyframes floatSmooth {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                        }
                        .animate-float-dompet {
                            animation: floatSmooth 4s ease-in-out infinite;
                        }
                        .animate-float-koin {
                            /* Jeda 0.5s ditambahkan di sini */
                            animation: floatSmooth 4s ease-in-out 1s infinite; 
                        }
                        `}
                    </style>

                    {/* 1. Gambar Dompet Utama (Animasi duluan, hover dihapus) */}
                    <img 
                        src="/dompet-3d.png" 
                        alt="Dompet 3D" 
                        className="relative z-10 w-full max-w-[500px] lg:max-w-[700px] object-contain drop-shadow-2xl animate-float-dompet"
                    />

                    {/* 2. Gambar Koin Melayang 1 (Kiri Bawah - Animasi jeda 0.5s, hover dihapus) */}
                    <img 
                        src="/koin-3d.png" 
                        alt="Koin Kiri" 
                        className="absolute z-20 w-40 lg:w-64 bottom-[-5%] lg:bottom-[-10%] left-[5%] lg:left-[-5%] drop-shadow-2xl animate-float-koin"
                    />

                    {/* 3. Gambar Koin Melayang 2 (Kanan Tengah - Animasi jeda 0.5s, hover dihapus) */}
                    <img 
                        src="/koin-3d.png" 
                        alt="Koin Kanan" 
                        className="absolute z-0 w-32 lg:w-56 top-[40%] lg:top-[45%] right-[5%] lg:right-[-10%] drop-shadow-xl animate-float-koin"
                    />

                    <img 
                    src="/koin-3d.png" 
                    alt="Ornamen Koin Kiri" 
                    className="absolute top-[-15%] left-[-172%] w-[350px] lg:w-[450px] opacity-15 blur-[3px] pointer-events-none" 
                    />

                    {/* 4. Gambar Koin Pudar (Digeser sangat jauh ke kanan agar hilang 1/4 bagian) */}
                    <img 
                        src="/koin-3d.png" 
                        alt="Koin Pudar" 
                        /* Nilai right-[-100%] akan mendorongnya keluar menabrak batas layar overflow-hidden */
                        className="absolute z-0 w-[400px] lg:w-[700px] bottom-[-40%] lg:bottom-[-60%] right-[-70%] lg:right-[-75%] opacity-15 blur-[3px] pointer-events-none"
                    />

                </div>

            </main>
        </div>
    );
}

Dashboard.layout = (page) => <>{page}</>;