import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Saldo({ auth, hitungSaldo, tanggal_terima }) {
    return (
        <div className="min-h-screen bg-[#f8fbfa] relative overflow-hidden font-sans">
            <Head title="Cek Saldo User" />

            {/* ================= ORNAMEN BACKGROUND ================= */}
            
            {/* 1. Ornamen Cincin Biru (Kanan Atas & Kiri Bawah DIKEMBALIKAN) */}
            <div className="absolute top-[10%] right-[-5%] w-64 h-64 border-[30px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 border-[40px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none"></div>

            {/* 2. Ornamen Koin 3D Pudar (TETAP DIPERTAHANKAN) */}
            <img 
                src="/koin-3d.png" 
                alt="Ornamen Koin Kiri" 
                className="absolute top-[4%] left-[-9%] w-[350px] lg:w-[450px] opacity-15 blur-[3px] pointer-events-none" 
            />
            <img 
                src="/koin-3d.png" 
                alt="Ornamen Koin Kanan" 
                className="absolute bottom-[-33%] right-[-12%] w-[700px] lg:w-[680px] opacity-15 blur-[3px] pointer-events-none" 
            />

            {/* ================= NAVBAR ATAS ================= */}
            <nav className="w-full px-8 lg:px-16 py-5 flex items-center justify-between bg-transparent relative z-20">
                <div className="text-[#1a56db] font-black text-2xl tracking-wider">
                    SOS-WALLET
                </div>

                <div className="hidden lg:flex items-center gap-2 lg:gap-4 font-bold text-gray-700 text-sm">
                    <Link href="/user/dashboard" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Beranda</Link>
                    
                    {/* Menu Aktif */}
                    <Link href="/user/saldo" className="px-4 py-2 text-black border-b-2 border-black pb-1">Cek Saldo</Link>
                    
                    <Link href="/user/pembayaran" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Pembayaran</Link>
                    <Link href="/user/riwayat" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Riwayat</Link>
                    <Link href="/user/update" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Update</Link>
                </div>

                <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-800">{auth?.user?.name}</span>
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

            {/* ================= KONTEN UTAMA CEK SALDO ================= */}
            <main className="relative z-10 px-8 lg:px-16 py-10 max-w-[1200px] mx-auto flex flex-col items-center">
                
                <h2 className="text-3xl font-bold text-black mb-8 tracking-wide">
                    Informasi Saldomu
                </h2>

                {/* --- KOTAK BIRU --- */}
                <div className="w-full bg-[#def4fb] rounded-[40px] p-10 lg:p-14 lg:min-h-[500px] flex flex-col lg:flex-row items-stretch justify-between shadow-sm relative overflow-hidden">
                    
                    {/* KIRI: NAMA & SALDO */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start z-10 mb-10 lg:mb-0">
                        <h3 className="text-4xl lg:text-[42px] font-black text-black tracking-tight mb-12">
                            {auth?.user?.name}
                        </h3>
                        
                        <div>
                            <p className="text-2xl font-bold text-black mb-3">
                                Total Saldo Saat ini
                            </p>
                            
                            <div className="bg-white rounded-2xl px-8 py-3 shadow-sm inline-block">
                                <span className="text-3xl font-bold text-black">
                                    Rp {hitungSaldo ? hitungSaldo.toLocaleString('id-ID') : '0'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* KANAN: GAMBAR UANG & TANGGAL DITERIMA */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between items-end z-10">
                        
                        {/* Gambar Uang 3D */}
                        <div className="w-full max-w-[420px] flex justify-center">
                            <img 
                                src="/uang-3d.png" 
                                alt="Ilustrasi Saldo Uang" 
                                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500" 
                            />
                        </div>

                        {/* Tanggal */}
                        <div className="flex flex-col items-end text-right mt-12 lg:mt-auto pr-2">
                            <p className="text-xl font-bold text-black mb-1">Tanggal diterima</p>
                            <p className="text-xl font-bold text-black">
                                {tanggal_terima ? tanggal_terima : 'Belum ada dana masuk'}
                            </p>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}

// Menonaktifkan layout bawaan
Saldo.layout = (page) => <>{page}</>;