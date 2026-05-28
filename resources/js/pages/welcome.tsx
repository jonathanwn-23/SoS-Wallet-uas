import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="SOS-WALLET" />
            
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
            
                        <span className="text-blue-500 font-bold text-xl tracking-tight">SOS-WALLET</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12">
                        <a href="#home" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Home</a>
                        <a href="#fitur" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Fitur</a>
                        <a href="#tentang-kami" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Tentang Kami</a>
                    </div>

                    <div>
                        <Link 
                            href="/login" 
                            className="bg-[#2b85ff] hover:bg-blue-600 text-white px-8 py-2 rounded-md text-sm font-bold transition-all"
                        >
                            Login
                        </Link>
                    </div>
                </nav>

                {/* =========================== 2. BAGIAN DASBOARD =========================== */}
                <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
                
                {/* ===== CSS KUSTOM UNTUK ANIMASI MENGAMBANG ===== */}
                <style>
                    {`
                    @keyframes floatTangan {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                    .animate-float-tangan {
                        /* 4s adalah durasi 1 putaran animasi (4 detik). ease-in-out membuatnya melambat di ujung agar halus */
                        animation: floatTangan 4s ease-in-out infinite;
                    }
                    `}
                </style>

                {/* Lingkaran Dekoratif Kanan Atas (TETAP) */}
                <div className="absolute right-[-150px] top-10 w-[400px] h-[400px] border-[50px] border-[#e8f7f9] rounded-full opacity-60 z-0 pointer-events-none"></div>
                
                {/* Lingkaran Dekoratif Kiri Tengah (TETAP) */}
                <div className="absolute left-[-150px] bottom-20 w-[300px] h-[300px] border-[40px] border-[#e8f7f9] rounded-full opacity-60 z-0 pointer-events-none"></div>

                {/* GAMBAR: Koin Transparan Kanan Bawah */}
                        <img 
                        src="/koin-3d.png" 
                        alt="Ornamen Koin Kiri" 
                        className="absolute top-[-5%] left-[-5%] w-[350px] lg:w-[350px] opacity-15 blur-[1px] pointer-events-none" 
                        />

                <img 
                    src="/koin-3d.png" 
                    alt="Ornamen Koin kanan" 
                    className="absolute bottom-10 right-10 w-48 md:w-64 lg:w-80 opacity-15 z-0 pointer-events-none"
                />

                {/* ===== KONTEN UTAMA ===== */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-2">
                    
                    {/* KOLOM KIRI: Gambar Tangan Uang */}
                    <div className="flex-shrink-0 flex justify-center">
                        <img 
                            src="/tangan-uang.png" 
                            alt="Ilustrasi Bantuan" 
                            /* Class animate-float-tangan ditambahkan di sini */
                            className="w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] object-contain drop-shadow-2xl animate-float-tangan"
                        />
                    </div>

                    {/* KOLOM KANAN: Teks Judul dan Paragraf */}
                    <div className="flex flex-col items-start text-left max-w-lg">
                        <h1 className="text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-black text-[#111827] mb-6 leading-[1.1] tracking-tight">
                            Bantuan Aman <br /> Tanpa Perantara
                        </h1>
                        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed font-medium">
                            Memakai dana bantuan dengan aman tentram serta memudahkan dalam transaksi
                        </p>
                    </div>

                </div>
            </section>

                {/* ==================== 3. BAGIAN FITUR ==================== */}
                <section id="fitur" className="relative min-h-screen flex flex-col items-center justify-center bg-[#eef5ff] py-20">
                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                        <h2 className="text-3xl font-black text-center text-[#111827] mb-16 tracking-tight">
                            Keunggulan Kami
                        </h2>
                        
                        {/* GAMBAR: Koin Transparan Kanan Bawah */}

                        <img 
                        src="/koin-3d.png" 
                        alt="Ornamen Koin Kiri" 
                        className="absolute top-[-100%] left-[-74%] w-[350px] lg:w-[450px] opacity-15 blur-[1px] pointer-events-none" 
                        />

                        <img 
                        src="/koin-3d.png" 
                        alt="Ornamen Koin" 
                        className="absolute bottom-[-80%] right-[-20%] w-48 md:w-64 lg:w-60 opacity-15 z-0 pointer-events-none"
                        />

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            {/* Kartu 1: Transaksi Instan */}
                            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-lg font-extrabold text-[#111827] mb-4">Transaksi Instan</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    Kirim dan terima dana tanpa delay. Sistem kami memproses dana dalam hitungan detik tanpa perantara yang menghambat
                                </p>
                            </div>

                            {/* Kartu 2: Transparansi Penuh */}
                            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-lg font-extrabold text-[#111827] mb-4">Transparansi Penuh</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    Pantau aliran dana secara real-time. Setiap transaksi tercatat secara permanen dan dapat diaudit kapan saja
                                </p>
                            </div>

                             {/* Kartu 3: Transaksi Instan */}
                            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-lg font-extrabold text-[#111827] mb-4">Sistem Authentification</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    Login dengan data yang terdaftar valid dan dilengkapi dengan keamanan yang baik
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== 4. BAGIAN TENTANG KAMI ==================== */}
                
                <section id="tentang-kami" className="relative min-h-screen flex flex-col items-center justify-center bg-white py-20">
                    {/* Lingkaran Dekoratif Kiri Bawah */}
                    <div className="absolute left-[-120px] bottom-10 w-[300px] h-[300px] border-[40px] border-[#e8f7f9] rounded-full opacity-80 z-0 pointer-events-none"></div>
                    {/* Lingkaran Dekoratif Kanan Atas */}
                    <div className="absolute right-[-100px] top-20 w-[250px] h-[250px] border-[35px] border-[#e8f7f9] rounded-full opacity-80 z-0 pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                        <h2 className="text-3xl font-black text-center text-[#111827] mb-20 tracking-tight">
                            Tentang Kami
                        </h2>
                        
                         {/* GAMBAR: Koin Transparan */}
                        <img 
                        src="/koin-3d.png" 
                        alt="Ornamen Koin Kiri" 
                        className="absolute top-[-10%] left-[-35%] w-[350px] lg:w-[350px] opacity-15 blur-[1px] pointer-events-none" 
                        />
                        
                        <img 
                        src="/koin-3d.png" 
                        alt="Ornamen Koin" 
                        className="absolute bottom-[-30%] right-[-50%] w-48 md:w-64 lg:w-40 opacity-15 z-0 pointer-events-none"
                        />
                        
                        <div className="flex flex-col md:flex-row justify-center items-end gap-20 md:gap-32">
                            {/* Profil 1: Jonathan */}
                            <div className="flex flex-col items-center text-center">
                                <img 
                                    src="/jonathan.png" 
                                    alt="Jonathan Winner Naya" 
                                    className="h-72 md:h-80 w-auto object-contain object-bottom mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300 origin-bottom"
                                />
                                <h3 className="text-base font-bold text-[#111827]">Jonathan Winner Naya</h3>
                                <p className="text-gray-500 text-sm mt-1">Teknologi Informasi 25</p>
                            </div>

                            {/* Profil 2: Joshua */}
                            <div className="flex flex-col items-center text-center">
                                <img 
                                    src="/joshua.png" 
                                    alt="Joshua Winner Naya" 
                                    className="h-72 md:h-80 w-auto object-contain object-bottom mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] scale-125 hover:scale-[1.30] transition-transform duration-300 origin-bottom"
                                />
                                <h3 className="text-base font-bold text-[#111827]">Joshua Winner Naya</h3>
                                <p className="text-gray-500 text-sm mt-1">Teknologi Informasi 25</p>
                            </div>

                             <div className="flex flex-col items-center text-center">
                                <img 
                                    src="/juna.png" 
                                    alt="Dede Junawan Rizky" 
                                    className="h-72 md:h-80 w-auto object-contain object-bottom mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] scale-105 hover:scale-110 transition-transform duration-300 origin-bottom"
                                />
                                <h3 className="text-base font-bold text-[#111827]">Dede Junawan Rizky</h3>
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

Welcome.layout = (page: React.ReactNode) => <>{page}</>;