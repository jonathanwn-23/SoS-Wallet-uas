import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Props {
    saldoSekarang: number;
    auth: any; 
}

export default function Pembayaran({ saldoSekarang, auth }: Props) {
    const { data, setData, post, processing, errors } = useForm<any>({
        toko: '',
        paket: '',
    });

    const [harga, setHarga] = useState(0);

   useEffect(() => {
        if (data.toko !== '' && data.paket !== '') {
            
            // Logika Harga Khusus Koperasi Desa Sejahtera
            if (data.toko === 'Koperasi Desa Sejahtera') {
                if (data.paket === 'Paket A Lengkap') {
                    setHarga(50000);
                } else if (data.paket === 'Paket B Standar') {
                    setHarga(25000);
                }
            } 
            // Logika Harga Khusus Toko Sembako Makmur (Harga normal)
            else if (data.toko === 'Toko Sembako Makmur') {
                if (data.paket === 'Paket A Lengkap') {
                    setHarga(100000);
                } else if (data.paket === 'Paket B Standar') {
                    setHarga(50000);
                }
            }

        } else {
            // Jika salah satu belum dipilih, harga tetap 0
            setHarga(0);
        }
        }, [data.toko, data.paket]);


    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(angka);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/user/pembayaran'); 
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Pembayaran" />
            
            <div className="p-8 w-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Pembayaran</h2>

                {/* Kotak Total Saldo saat ini */}
                <div className="bg-[#e6f0ff] rounded-xl p-5 mb-10 w-max min-w-[250px]">
                    <p className="text-[#60a5fa] font-semibold text-sm mb-1">Total Saldo saat ini</p>
                    <h3 className="text-3xl font-bold text-gray-900">{formatRupiah(saldoSekarang)}</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Select Box 1: Toko */}
                    <div className="space-y-2 max-w-xl">
                        <label className="text-gray-500 text-sm block text-center">Pilih Toko & Scan QR Code di bawah</label>
                        <select
                            value={data.toko}
                            onChange={(e) => setData('toko', e.target.value)}
                            className="w-full border border-gray-400 rounded-lg p-3 text-gray-800 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            required
                        >
                            <option value="" disabled>Pilih Toko/Tujuan</option>
                            <option value="Koperasi Desa Sejahtera">Koperasi Desa Sejahtera</option>
                            <option value="Toko Sembako Makmur">Toko Sembako Makmur</option>
                        </select>
                        {errors.toko && <p className="text-red-500 text-xs mt-1">{errors.toko}</p>}
                    </div>

                    {/* Select Box 2: Paket Pembelian */}
                    <div className="space-y-2 max-w-xl">
                        <label className="text-gray-500 text-sm block text-center">Pilih paket pembelian di bawah</label>
                        <select
                            value={data.paket}
                            onChange={(e) => setData('paket', e.target.value)}
                            className="w-full border border-gray-400 rounded-lg p-3 text-gray-800 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            required
                        >
                            <option value="" disabled>Pilih paket pembelian</option>
                            <option value="Paket A Lengkap">Paket A Lengkap</option>
                            <option value="Paket B Standar">Paket B Standar</option>
                        </select>
                        {errors.paket && <p className="text-red-500 text-xs mt-1">{errors.paket}</p>}
                    </div>

                    {/* Kotak Harga Dinamis */}
                    <div className="bg-[#e5e7eb] rounded-xl p-6 shadow-sm max-w-xl mt-8">
                        <p className="text-gray-900 font-bold text-sm mb-1">Harga yang harus dibayar</p>
                        <h3 className="text-3xl font-bold text-gray-900">{formatRupiah(harga)}</h3>
                    </div>

                    {errors.saldo && (
                        <div className="bg-red-100 text-red-600 p-3 rounded-lg font-medium text-sm max-w-xl">
                            {errors.saldo}
                        </div>
                    )}

                    {/* Tombol Konfirmasi */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={processing || harga === 0 || saldoSekarang < harga}
                            className="w-[300px] bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                            {processing ? 'MEMPROSES...' : 'KONFIRMASI PEMBAYARAN'}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}