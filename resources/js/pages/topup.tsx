import React, { FormEvent } from 'react';
import { Head, useForm } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    nik: string;
}


interface Transaction {
    id: number;
    category: string;
    user_name: string; 
    created_at_formatted: string;
    amount_formatted: string; 
}

interface TopUpProps {
    users: User[];
    recentTransactions?: Transaction[]; // Props baru untuk riwayat (bisa kosong)
}

export default function TopUp({ users, recentTransactions = [] }: TopUpProps) {

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: '',
        title: 'Bantuan Tunai', 
        category: 'Dana Bantuan',
        amount: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/topup', {
            onSuccess: () => {
                alert('Top Up Berhasil Dikirim ke User!');
                reset('amount', 'user_id'); 
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 w-full">
            <Head title="Top Up Saldo - Admin" />

            <div className="mb-8">
                <h1 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">Top Up Saldo</h1>
                <p className="text-gray-500 text-sm font-medium">Isi dana bantuan kepada penerima</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <form onSubmit={submit} className="flex flex-col gap-5">
                        
                        {/* Pilih Penerima */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-sm text-gray-700">Pilih Penerima Bantuan (User Valid)</label>
                            <select
                                value={data.user_id}
                                onChange={(e) => setData('user_id', e.target.value)}
                                className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                                required
                            >
                                <option value="" disabled>-- Klik untuk memilih User --</option>
                                {users && users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name} - (NIK: {user.nik})
                                    </option>
                                ))}
                            </select>
                            {errors.user_id && <span className="text-red-500 text-xs">{errors.user_id}</span>}
                        </div>
                        
                        {/* Judul Transaksi */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-sm text-gray-700">Judul Transaksi</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                                required
                            />
                        </div>

                        {/* Kategori */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-sm text-gray-700">Kategori</label>
                            <input
                                type="text"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                                required
                            />
                        </div>

                        {/* Nominal Saldo */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-sm text-gray-700">Nominal Saldo (Rp)</label>
                            <input
                                type="number"
                                value={data.amount}
                                onChange={(e) => setData('amount', e.target.value)}
                                className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Contoh: 500000"
                                required
                            />
                            {errors.amount && <span className="text-red-500 text-xs">{errors.amount}</span>}
                        </div>

                        {/* Tombol Kirim */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-4 bg-[#2b85ff] hover:bg-blue-600 text-white font-bold py-3.5 rounded-md transition-all disabled:opacity-70"
                        >
                            {processing ? 'Memproses...' : 'Kirim Saldo Sekarang'}
                        </button>
                    </form>
                </div>


               {/* ================= KOLOM KANAN: RIWAYAT TOP UP ================= */}
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-bold text-center text-gray-900 mb-6">Riwayat Top Up Terakhir</h3>
                    
                    {/* Wadah Scroll */}
                   <div className="h-[440px] overflow-y-auto pr-3 flex flex-col gap-4" style={{ scrollbarWidth: 'thin' }}>
                    
                        {recentTransactions.length > 0 ? (
                            recentTransactions.map((trx) => (
                                /* Tambahan 'shrink-0' agar kotak tidak tergencet/mengecil saat jumlahnya banyak */
                                <div key={trx.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center shrink-0">
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-bold text-gray-900 text-[14px]">
                                            {trx.category} - {trx.user_name}
                                        </h4>
                                        <p className="text-[12px] text-gray-500 mt-1">
                                            {trx.created_at_formatted}
                                        </p>
                                    </div>
                                    <div className="text-[#10b981] font-bold text-[14px]">
                                        {trx.amount_formatted}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 text-sm mt-10 p-6 bg-white rounded-xl border border-dashed border-gray-300">
                                Belum ada riwayat top up.
                            </div>
                        )}
                        
                    </div>
                </div>

            </div>
        </div>
    );
}