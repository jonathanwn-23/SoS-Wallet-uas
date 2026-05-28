import React from 'react';
import { Head, Link } from '@inertiajs/react';

// Menangkap props auth, app_version, dan last_sync dari Controller
export default function Update({ auth, app_version = '2.4.1', last_sync = 'Today at 09:42 AM' }) {
    
    // Fungsi untuk Refresh Halaman
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-[#f8fbfa] relative overflow-hidden font-sans pb-20">
            <Head title="Pembaruan Sistem" />

            {/* ==================== ORNAMEN BACKGROUND ==================== */}
            {/* Ornamen Koin 3D Pudar (TETAP DIPERTAHANKAN) */}
            <img 
                src="/koin-3d.png" 
                alt="Ornamen Koin Kiri" 
                className="fixed top-[4%] left-[-9%] w-[350px] lg:w-[450px] opacity-15 blur-[3px] pointer-events-none" 
            />
            <img 
                src="/koin-3d.png" 
                alt="Ornamen Koin Kanan" 
                className="fixed bottom-[-33%] right-[-12%] w-[700px] lg:w-[680px] opacity-15 blur-[3px] pointer-events-none" 
            />
            {/* Ornamen cincin biru (TETAP DIPERTAHANKAN) */}
            <div className="fixed top-[10%] right-[-5%] w-64 h-64 border-[30px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] left-[-5%] w-80 h-80 border-[40px] border-[#e0fbfc] rounded-full opacity-60 pointer-events-none z-0"></div>

            {/* ==================== NAVBAR ATAS ==================== */}
            <nav className="w-full px-8 lg:px-16 py-5 flex items-center justify-between bg-transparent relative z-20">
                <div className="text-[#1a56db] font-black text-2xl tracking-wider">
                    SOS-WALLET
                </div>

               <div className="hidden lg:flex items-center gap-2 lg:gap-4 font-bold text-gray-700 text-sm">
                    <Link href="/user/dashboard" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Beranda</Link>
                    <Link href="/user/saldo" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Cek Saldo</Link>
                    <Link href="/user/pembayaran" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Pembayaran</Link>
                    <Link href="/user/riwayat" className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-[#1a56db] transition-all duration-300">Riwayat</Link>
                    
                    {/* Menu Aktif */}
                    <Link href="/user/update" className="px-4 py-2 text-black border-b-2 border-black pb-1">Update</Link>
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

            {/* ==================== KONTEN UTAMA UPDATE ==================== */}
            <main className="relative z-10 px-8 lg:px-16 py-10 max-w-[1200px] mx-auto flex flex-col items-center">
                
                <h2 className="text-3xl font-bold text-black mb-10 tracking-wide">
                    Update
                </h2>

                {/* Kotak Putih Utama */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-[480px] flex flex-col items-center">
                    
                    {/* Versi & Waktu */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        Version {app_version} (Latest)
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        Last checked: {last_sync}
                    </p>
                    
                    {/* Garis Pemisah */}
                    <div className="w-full h-px bg-gray-200 mb-6"></div>

                    {/* What's New Section */}
                    <div className="w-full flex flex-col gap-6">
                        <span className="text-[11px] font-bold text-[#0047a5] tracking-widest uppercase mb-1">
                            WHAT'S NEW
                        </span>

                        {/* Fitur 1: Performance */}
                        <div className="flex gap-4 items-start">
                            <div className="mt-0.5 text-[#138d58]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">Performance Optimization</h4>
                                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed pr-2">
                                    Enhanced the loading speed for transaction history and balance statements by 40%.
                                </p>
                            </div>
                        </div>

                        {/* Fitur 2: Security */}
                        <div className="flex gap-4 items-start">
                            <div className="mt-0.5 text-[#138d58]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6 2a1 1 0 0 1 1 1v7z"/><path d="m9 12 2 2 4-4"/></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">Security Patches</h4>
                                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed pr-2">
                                    Routine updates to encryption protocols to ensure your data remains protected.
                                </p>
                            </div>
                        </div>

                        {/* Fitur 3: UI */}
                        <div className="flex gap-4 items-start">
                            <div className="mt-0.5 text-[#138d58]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">UI Refinement</h4>
                                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed pr-2">
                                    Updated typography and spacing for a cleaner, more accessible reading experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Refresh */}
                    <button 
                        onClick={handleRefresh}
                        className="mt-10 w-full bg-[#0047a5] text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition-colors shadow-md"
                    >
                        Refresh
                    </button>

                </div>
            </main>
        </div>
    );
}

// Menonaktifkan layout bawaan
Update.layout = (page) => <>{page}</>;