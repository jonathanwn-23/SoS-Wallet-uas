import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* SIDEBAR SEBELAH KIRI */}
            <aside className="w-64 bg-blue-400 text-white flex flex-col shadow-lg">
                <div className="p-8 text-3xl font-bold text-center">
                    User
                </div>
                
                <nav className="flex-1 px-4 space-y-4 mt-4">
                    <Link href={route('dashboard')} className="flex items-center space-x-3 p-3 hover:bg-blue-500 rounded-lg transition text-xl font-semibold">
                        <span>Beranda</span>
                    </Link>
                    <Link href={route('saldo')} 
                    className="flex items-center space-x-3 p-3 hover:bg-blue-500 rounded-lg transition text-xl font-semibold">
                    <span>Cek Saldo</span>
                    </Link>
                    <Link href={route('pembayaran')} 
                    className="flex items-center space-x-3 p-3 hover:bg-blue-500 rounded-lg transition text-xl font-semibold">
                    <span>Pembayaran</span>
                    </Link>
                    <Link href={route('riwayat')} 
                    className="flex items-center space-x-3 p-3 hover:bg-blue-500 rounded-lg transition text-xl font-semibold">
                        <span>Riwayat</span>
                    </Link>
                    <Link href={route('update')} 
                    className="flex items-center space-x-3 p-3 hover:bg-blue-500 rounded-lg transition text-xl font-semibold text-white">
                    <span>Update</span>
                    </Link>
                </nav>
            </aside>

            {/* AREA KONTEN SEBELAH KANAN */}
            <main className="flex-1">
                {/* Header Atas untuk Nama & Logout */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800 tracking-tighter">SOS-WALLET</div>
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold text-gray-700">{user.name}</span>
                        <Link 
                            href={route('logout')} 
                            method="post" 
                            as="button" 
                            className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                        >
                            Log Out
                        </Link>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}