import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Saldo({ auth, hitungSaldo }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Cek Saldo" />

            <div className="p-10 max-w-2xl">
                {/* Header Halaman */}
                <h1 className="text-2xl font-bold mb-8">
                    Informasi Saldo Pengguna
                </h1>

                {/* Box Informasi Utama */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-gray-500 text-sm mb-1 uppercase font-bold tracking-tighter">Nama Pemegang Kartu</p>
                            <p className="text-xl font-semibold">{auth.user.name}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-sm mb-1 uppercase font-bold tracking-tighter">Status Akun</p>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">TERVERIFIKASI</span>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <p className="text-blue-600 font-bold text-xs uppercase mb-2">Total Saldo Saat Ini</p>
                        <p className="text-4xl font-black text-black-900">
                            Rp {parseFloat(hitungSaldo).toLocaleString('id-ID')}
                        </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between text-sm">
                        <div className="text-gray-500">
                            <p>Nomor NIK:</p>
                            <p className="font-mono font-bold text-gray-700">{auth.user.nik}</p>
                        </div>
                        <div className="text-right text-gray-500">
                            <p>Terakhir Update:</p>
                            <p className="font-bold text-gray-700">{new Date().toLocaleDateString('id-ID')}</p>
                        </div>
                    </div>
                </div>

                {/* Catatan Kaki */}
                <div className="text-xs text-gray-400 italic">
                    *Data ini diambil secara otomatis dari sistem pusat bantuan sosial.
                </div>
            </div>
        </AuthenticatedLayout>
    );
}