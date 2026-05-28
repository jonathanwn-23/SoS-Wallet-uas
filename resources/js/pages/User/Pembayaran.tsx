import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';


interface Props {
    saldoSekarang?: number;
    auth: any;
}

export default function Pembayaran({ saldoSekarang = 0, auth }: Props) {
    // 1. LOGIKA TOMBOL PILIH (Menggantikan Dropdown)
    // 1. LOGIKA STATE UNTUK MODAL (TAMPILAN BARU)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [selectedData, setSelectedData] = useState({ toko: '', paket: '', harga: 0 });

    // Fungsi saat tombol "Pilih & Bayar" diklik (Hanya memunculkan modal konfirmasi)
    const handlePilih = (toko: string, paket: string, harga: number) => {
        setSelectedData({ toko, paket, harga });
        setIsConfirmOpen(true); // Nyalakan saklar modal konfirmasi
    };

    // Fungsi saat tombol "Oke" di dalam modal konfirmasi diklik
    const prosesPembayaran = () => {
        // Mengirim 3 parameter data (Payload) ke backend Laravel - LOGIKA DIPERTAHANKAN 100%
        router.post('/user/pembayaran', {
            toko: selectedData.toko,
            paket: selectedData.paket,
            amount: selectedData.harga 
        }, {
            onSuccess: () => {
                // Jika Laravel merespons sukses, tutup konfirmasi dan buka modal sukses
                setIsConfirmOpen(false);
                setIsSuccessOpen(true);
            }
        });
    };

    // 2. DATA TOKO & PAKET (Harga dan deskripsi dimasukkan ke sini agar rapi)
    const merchants = [
        {
            name: "Toko Sembako Makmur",
            badge: "Belanja",
            desc: "Menjual sembilan bahan pokok untuk keperluan sehari-hari dengan harga cukup terjangkau",
            img: "/toko-sembako.jpg",
            packages: [
                { id: 'Paket A', price: 50000, items: "Telur, Gula, Garam, Beras, Sabun, Odol" },
                { id: 'Paket B', price: 100000, items: "Semua paket A, Mie, Kopi, Teh, Minyak goreng, Bumbu sachet, Kecap" }
            ]
        },
        {
            name: "Koperasi Desa Sejahtera",
            badge: "ATK",
            desc: "Menjual alat tulis yang cukup lengkap",
            img: "/koperasi-desa.jpg",
            packages: [
                { id: 'Paket A', price: 10000, items: "2 Buku, 1 pulpen, 1 pensil, 1 penghapus" },
                { id: 'Paket B', price: 20000, items: "Semua paket A, 1 tipe-x, 1 penggaris, 1 rautan" }
            ]
        },
        {
            name: "Apotik Amanah",
            badge: "Obat-obatan",
            desc: "Menjual obat-obatan yang diperlukan selama 24 jam",
            img: "/apotik.jpg",
            packages: [
                { id: 'Paket A', price: 25000, items: "Obat pusing, flu, batuk, demam, vitamin c, vitamin b complex" },
                { id: 'Paket B', price: 50000, items: "Semua paket A, minyak kayu putih, obat mabuk, susu anak, DLL" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fbfa] relative overflow-hidden font-sans pb-16">
            <Head title="Pembayaran User" />

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
                    
                    {/* Menu Aktif */}
                    <Link href="/user/pembayaran" className="px-4 py-2 text-black border-b-2 border-black pb-1">Pembayaran</Link>
                    
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

            {/* ==================== KONTEN UTAMA PEMBAYARAN ==================== */}
            <main className="relative z-10 px-8 lg:px-16 py-10 max-w-[1300px] mx-auto">
                <h2 className="text-3xl font-bold text-black mb-10 text-center tracking-wide">
                    Pembayaran
                </h2>

                {/* Grid 3 Kolom untuk Toko */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {merchants.map((merchant, idx) => (
                        <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
                            
                            {/* Gambar Toko */}
                            <div className="w-full h-48 bg-gray-200 relative">
                                <img 
                                    src={merchant.img} 
                                    alt={merchant.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e: any) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Peringatan Jika Gambar Belum Ada */}
                                <div className="hidden absolute inset-0 bg-gray-200 items-center justify-center text-xs text-gray-500 text-center px-4">
                                    Simpan gambar toko di public dengan nama<br/>{merchant.img.replace('/', '')}
                                </div>
                            </div>
                            
                            {/* Info Toko */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2 gap-2">
                                    <h3 className="text-[20px] font-bold text-black leading-tight">{merchant.name}</h3>
                                    {/* Badge Hijau */}
                                    <span className="bg-[#e2f5ec] text-[#138d58] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                        {merchant.badge}
                                    </span>
                                </div>
                                <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                                    {merchant.desc}
                                </p>

                                {/* Daftar Paket di Dalam Toko */}
                                <div className="flex flex-col gap-4 mt-auto">
                                    {merchant.packages.map((pkt, pIdx) => (
                                        <div key={pIdx} className="border border-gray-200 rounded-2xl p-4 flex flex-col bg-[#fcfcfc]">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-black">{pkt.id}</span>
                                                <span className="font-bold text-black text-[17px]">
                                                    Rp {pkt.price.toLocaleString('id-ID')}
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-500 mb-4 h-[34px] leading-snug">
                                                {pkt.items}
                                            </p>
                                            
                                            {/* TOMBOL PILIH (Logic Transisi Warna Biru -> Putih) */}
                                            <button
                                                onClick={() => handlePilih(merchant.name, pkt.id, pkt.price)}
                                                className="w-full py-2.5 rounded-xl font-bold transition-all border-2 border-[#0047a5] bg-[#0047a5] text-white hover:bg-white hover:text-[#0047a5]"
                                            >
                                                Pilih
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </main>
                {/* ================= MODAL KONFIRMASI PEMBAYARAN (GAMBAR 2) ================= */}
            {isConfirmOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all px-4">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl text-center">
                        <p className="text-gray-700 text-[15px] mb-6 leading-relaxed">
                            Anda akan membeli {selectedData.paket} di {selectedData.toko} <br />
                            seharga Rp {selectedData.harga.toLocaleString('id-ID')}
                        </p>
                        
                        <h3 className="text-[18px] font-extrabold text-black mb-8">
                            Lanjutkan Pembayaran?
                        </h3>
                        
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={prosesPembayaran}
                                className="w-full py-3 rounded-lg font-bold text-white bg-[#0047a5] hover:bg-blue-800 transition-colors"
                            >
                                Oke
                            </button>
                            <button 
                                onClick={() => setIsConfirmOpen(false)}
                                className="w-full py-3 rounded-lg font-bold text-[#0047a5] bg-[#e6f0ff] hover:bg-blue-100 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MODAL PEMBAYARAN BERHASIL (GAMBAR 3) ================= */}
            {isSuccessOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all px-4">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl text-center flex flex-col items-center">
                        
                        {/* Lingkaran Icon Centang */}
                        <div className="w-16 h-16 bg-[#0047a5] rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h3 className="text-[18px] font-extrabold text-black mb-8">
                            Pembayaran telah berhasil
                        </h3>
                        
                        <button 
                            onClick={() => setIsSuccessOpen(false)}
                            className="w-full py-3 rounded-lg font-bold text-[#0047a5] bg-[#e6f0ff] hover:bg-blue-100 transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Menonaktifkan layout bawaan agar tampil full screen
Pembayaran.layout = (page: any) => <>{page}</>;