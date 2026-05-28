import React from 'react';
import { Head } from '@inertiajs/react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mempertahankan interface bawaan agar TypeScript tidak error
interface DashboardProps {
    totalPenerima: number;
    totalRejected: number;
    totalPending: number;
    totalValidated: number;
    totalDanaTersalurkan: number;
}

export default function Dashboard({ totalPenerima, totalRejected, totalPending, totalValidated, totalDanaTersalurkan }: DashboardProps) {
    
    // Logika warna grafik bawaan tetap dipertahankan
    const dataGrafik = [
        { name: 'Validated', value: totalValidated, color: '#10b981' }, // Hijau Tailwind
        { name: 'Pending', value: totalPending, color: '#f59e0b' },   // Kuning Tailwind
        { name: 'Rejected', value: totalRejected, color: '#ef4444' }, // Merah Tailwind
    ];

    // Fungsi format rupiah bawaan tetap dipertahankan
    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    return (
        <>
            <Head title="Dashboard" />
            
            {/* Latar belakang halaman abu-abu sangat muda agar kartu putih lebih menonjol */}
            <div className="flex-1 p-6 lg:p-8 bg-[#f8fbfa] font-sans min-h-screen">
                
                {/* Bagian Judul */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-1.5 text-sm">Selamat datang kembali! Berikut adalah ringkasan data SOS-WALLET Anda hari ini.</p>
                </div>

                {/* Grid untuk 4 Kotak Berwarna (Desain Baru) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    
                    {/* Kotak 1: Total Tercatat (Biru) */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-t-[6px] border-[#3b82f6]">
                        <h3 className="text-[#3b82f6] font-bold text-[11px] uppercase tracking-widest mb-2">Total Data Tercatat</h3>
                        <div className="text-5xl font-black text-[#1e3a8a]">{totalPenerima}</div>
                        <p className="text-[#3b82f6] text-sm font-bold mt-2">Data Yang Tercatat</p>
                    </div>

                    {/* Kotak 2: Total Rejected (Merah/Oranye) */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-t-[6px] border-[#ea580c]">
                        <h3 className="text-[#ea580c] font-bold text-[11px] uppercase tracking-widest mb-2">Total Data Rejected</h3>
                        <div className="text-5xl font-black text-[#9a3412]">{totalRejected}</div>
                        <p className="text-[#ea580c] text-sm font-bold mt-2">Data Yang Ditolak</p>
                    </div>

                    {/* Kotak 3: Total Pending (Kuning) */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-t-[6px] border-[#eab308]">
                        <h3 className="text-[#eab308] font-bold text-[11px] uppercase tracking-widest mb-2">Total Data Pending</h3>
                        <div className="text-5xl font-black text-[#854d0e]">{totalPending}</div>
                        <p className="text-[#eab308] text-sm font-bold mt-2">Data Menunggu Validasi</p>
                    </div>

                    {/* Kotak 4: Total Validated (Hijau) */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-t-[6px] border-[#22c55e]">
                        <h3 className="text-[#22c55e] font-bold text-[11px] uppercase tracking-widest mb-2">Total Data Validated</h3>
                        <div className="text-5xl font-black text-[#14532d]">{totalValidated}</div>
                        <p className="text-[#22c55e] text-sm font-bold mt-2">Data Telah Tervalidasi</p>
                    </div>
                </div>

                {/* Grid Bawah: Dana Tersalurkan & Grafik Donat */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Kiri: Kotak Biru Dana Tersalurkan (Mengambil 2 kolom di layar lebar) */}
                    <div className="lg:col-span-2 bg-[#0b6a95] rounded-3xl shadow-sm p-8 lg:p-10 flex flex-col justify-between text-white">
                        <div>
                            <h3 className="uppercase font-bold tracking-widest text-sm text-white/90 mb-4">
                                Jumlah Dana Yang Tersalurkan
                            </h3>
                            <div className="text-4xl lg:text-[56px] font-black tracking-tight mb-8">
                                {formatRupiah(totalDanaTersalurkan)}
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <div className="h-px w-full bg-white/20 mb-5"></div>
                            <p className="text-sm text-white/80 font-medium">
                                Akumulasi bantuan tunai khusus penerima terverifikasi valid secara sistem per tanggal hari ini
                            </p>
                        </div>
                    </div>

                    {/* Kanan: Kotak Grafik Status Penerima (Mengambil 1 kolom) */}
                    <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col">
                        
                        {/* Judul Grafik & Ikon */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800">Grafik Status Penerima</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                                <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
                            </svg>
                        </div>

                        {/* Area Grafik */}
                        <div className="flex-1 min-h-[250px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataGrafik}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70} // Membentuk bolongan di tengah (Donat)
                                        outerRadius={95}
                                        paddingAngle={5} // Memberi jarak estetika antar potongan warna
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {dataGrafik.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>

                            {/* Teks di tengah Donat (Trik Posisi Absolut) */}
                            {/* pointer-events-none penting agar teks ini tidak menghalangi kursor saat menyentuh grafik */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                                <span className="text-3xl font-black text-gray-800">{totalPenerima}</span>
                                <span className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mt-1">Total Entri</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}