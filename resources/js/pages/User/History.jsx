import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function History({ auth, transactions }) {
    return (
        <div className="min-h-screen bg-[#f8fbfa] relative overflow-hidden font-sans pb-20">
            <Head title="Riwayat Transaksi" />

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
                    
                    {/* Menu Aktif */}
                    <Link href="/user/riwayat" className="px-4 py-2 text-black border-b-2 border-black pb-1">Riwayat</Link>
                    
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

            {/* ==================== KONTEN UTAMA RIWAYAT ==================== */}
            {/* PERUBAHAN: max-w-[1000px] diubah menjadi max-w-[1200px] agar lebih lebar */}
            <main className="relative z-10 px-8 lg:px-16 py-10 max-w-[1200px] mx-auto">
                
                <h2 className="text-3xl font-bold text-black mb-10 text-center tracking-wide">
                    Riwayat
                </h2>

                {/* Wadah Putih Utama */}
                <div className="bg-white rounded-[32px] shadow-sm p-8 lg:p-12 w-full">
                    {transactions && transactions.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {transactions.map((t) => (
                                <div key={t.id} className="py-6 flex justify-between items-center first:pt-0 last:pb-0 hover:bg-gray-50/50 transition-colors px-2 rounded-xl">
                                    
                                    {/* Bagian Kiri: Toko, Paket, Tanggal */}
                                    <div className="flex flex-col items-start">
                                        <h3 className="font-black text-black text-[19px]">{t.title}</h3>
                                        <p className="text-gray-800 text-sm mt-1.5">{t.category}</p>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            {new Date(t.created_at).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>

                                    {/* Bagian Kanan: Nominal (+ Hijau / - Merah) */}
                                    <div>
                                        <span className={`font-bold text-lg lg:text-xl ${t.type === 'in' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                            {t.type === 'in' ? '+ Rp ' : '- Rp '}
                                            {parseFloat(t.amount).toLocaleString('id-ID')}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-lg">Belum ada riwayat transaksi.</p>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
}

History.layout = (page) => <>{page}</>;