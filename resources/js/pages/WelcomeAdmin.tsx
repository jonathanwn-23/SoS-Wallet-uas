import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function WelcomeAdmin() {
    return (
        <>
            <Head title="Admin - SOS-WALLET" />
            
            {/* Mengaktifkan Smooth Scrolling untuk efek meluncur saat menu diklik */}
            <style>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>

            <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden relative">
                
                {/* ==================== 1. BILAH NAVIGASI ==================== */}
                <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500 p-1.5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                        </div>
                        <span className="text-blue-500 font-bold text-xl tracking-tight">SOS-WALLET</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12">
                        <a href="#home" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Home</a>
                        <a href="#fitur" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Fitur</a>
                        <a href="#tentang-kami" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Tentang Kami</a>
                    </div>

                    {/* --- REVISI: Penambahan Tombol Daftar & Perubahan Rute Login --- */}
                    <div className="flex items-center gap-3">
                        <Link 
                            href="/register" 
                            className="border border-[#2b85ff] text-[#2b85ff] hover:bg-blue-50 px-6 py-2 rounded-md text-sm font-bold transition-all"
                        >
                            Daftar
                        </Link>
                        <Link 
                            href="/login-admin" 
                            className="bg-[#2b85ff] hover:bg-blue-600 text-white px-8 py-2 rounded-md text-sm font-bold transition-all"
                        >
                            Login
                        </Link>
                    </div>
                </nav>

                {/* ==================== 2. BAGIAN PAHLAWAN (HERO) ==================== */}
                <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20">
                    <div className="absolute right-[-150px] top-10 w-[400px] h-[400px] border-[50px] border-[#e8f7f9] rounded-full opacity-60 z-0 pointer-events-none"></div>
                    <div className="absolute left-[-150px] bottom-20 w-[300px] h-[300px] border-[40px] border-[#e8f7f9] rounded-full opacity-60 z-0 pointer-events-none"></div>

                    <div className="text-center z-10 max-w-2xl px-6">
                        <h1 className="text-[44px] md:text-[56px] font-black text-[#111827] mb-6 leading-[1.1] tracking-tight">
                            Bantuan Aman <br /> Tanpa Perantara
                        </h1>
                        <p className="text-gray-600 text-[15px] md:text-[17px] max-w-lg mx-auto leading-relaxed">
                            Memakai dana bantuan dengan aman tentram serta memudahkan dalam transaksi
                        </p>
                    </div>
                </section>

                {/* ==================== 3. BAGIAN FITUR ==================== */}
                <section id="fitur" className="relative min-h-screen flex flex-col items-center justify-center bg-[#eef5ff] py-20">
                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                        <h2 className="text-3xl font-black text-center text-[#111827] mb-16 tracking-tight">
                            Keunggulan Kami
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-lg font-extrabold text-[#111827] mb-4">Transaksi Instan</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    Kirim dan terima dana tanpa delay. Sistem kami memproses dana dalam hitungan detik tanpa perantara yang menghambat
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-lg font-extrabold text-[#111827] mb-4">Transparansi Penuh</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    Pantau aliran dana secara real-time. Setiap transaksi tercatat secara permanen dan dapat diaudit kapan saja
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== 4. BAGIAN TENTANG KAMI ==================== */}
                <section id="tentang-kami" className="relative min-h-screen flex flex-col items-center justify-center bg-white py-20">
                    <div className="absolute left-[-120px] bottom-10 w-[300px] h-[300px] border-[40px] border-[#e8f7f9] rounded-full opacity-80 z-0 pointer-events-none"></div>
                    <div className="absolute right-[-100px] top-20 w-[250px] h-[250px] border-[35px] border-[#e8f7f9] rounded-full opacity-80 z-0 pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                        <h2 className="text-3xl font-black text-center text-[#111827] mb-20 tracking-tight">
                            Tentang Kami
                        </h2>

                        <div className="flex flex-col md:flex-row justify-center items-end gap-20 md:gap-32">
                            <div className="flex flex-col items-center text-center">
                                <img 
                                    src="/jonathan.png" 
                                    alt="Jonathan Winner Naya" 
                                    className="h-72 md:h-80 w-auto object-contain object-bottom mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300 origin-bottom"
                                />
                                <h3 className="text-base font-bold text-[#111827]">Jonathan Winner Naya</h3>
                                <p className="text-gray-500 text-sm mt-1">Teknologi Informasi 25</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img 
                                    src="/joshua.png" 
                                    alt="Joshua Winner Naya" 
                                    className="h-72 md:h-80 w-auto object-contain object-bottom mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] scale-125 hover:scale-[1.30] transition-transform duration-300 origin-bottom"
                                />
                                <h3 className="text-base font-bold text-[#111827]">Joshua Winner Naya</h3>
                                <p className="text-gray-500 text-sm mt-1">Teknologi Informasi 25</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-6 bg-white text-center z-10 relative border-t border-gray-50">
                    <p className="text-[11px] font-semibold text-gray-400 tracking-wider">
                        © 2026 SOS-WALLET. HAK CIPTA DILINDUNGI.
                    </p>
                </footer>

            </div>
        </>
    );
}

// Tambahkan kode ini di baris paling bawah file untuk menyingkirkan sidebar/layout bawaan
WelcomeAdmin.layout = (page: React.ReactNode) => <>{page}</>;