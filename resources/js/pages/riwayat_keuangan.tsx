import React from 'react';
import { Head } from '@inertiajs/react';

interface UserHistory {
    id: number;
    name: string; 
    pemasukkan: number;
    sisa_saldo: number;
}

interface Props {
    riwayatUsers: UserHistory[];
}

export default function RiwayatKeuanganAdmin({ riwayatUsers }: Props) {
    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(angka);
    };

    return (
        <>
            <Head title="Riwayat Keuangan" />

            {/* Gunakan w-full agar mengisi penuh lebar yang tersedia (mepet) */}
            <div className="p-6 w-full">
                    
                {/* Header Text: Tanpa background putih agar menyatu dengan halaman */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Riwayat Keuangan User</h2>
                    <p className="text-gray-600 mt-1 text-sm">Berikut semua riwayat keuangan user dari pemasukan hingga saldo yang tersedia saat ini.</p>
                </div>

                {/* Looping Card Data User */}
                <div className="space-y-4">
                    {riwayatUsers && riwayatUsers.length > 0 ? (
                        riwayatUsers.map((user) => (
                            <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-5 flex justify-between items-center shadow-sm">
                                
                                {/* Bagian Kiri: Nama dan Label */}
                                <div className="space-y-3">
                                    <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-gray-600">Pemasukkan</p>
                                        <p className="text-sm font-medium text-gray-600">Sisa Saldo</p>
                                    </div>
                                </div>

                                {/* Bagian Kanan: Nominal Uang */}
                                <div className="text-right space-y-3">
                                    <div className="h-7 text-transparent select-none">-</div> 
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-green-600">
                                            +{formatRupiah(user.pemasukkan)}
                                        </p>
                                        <p className="text-sm font-bold text-gray-900">
                                            {formatRupiah(user.sisa_saldo)}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="text-center p-10 bg-white rounded-lg border border-dashed border-gray-300">
                            <p className="text-gray-500">Belum ada riwayat data keuangan yang valid.</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}

// Layout configuration untuk breadcrumbs (Sudah diperbaiki namanya!)
RiwayatKeuanganAdmin.layout = {
    breadcrumbs: [
        {
            title: 'Riwayat',
            href: '/admin/riwayat-keuangan',
        },
    ],
};