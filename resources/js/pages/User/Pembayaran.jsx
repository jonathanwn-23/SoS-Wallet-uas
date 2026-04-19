import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Pembayaran({ auth, saldoSekarang }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Pembayaran QR" />

            <div className="p-10 max-w-2xl">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">Menu Pembayaran</h1>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                    {/* Info Saldo */}
                    <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100">
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Saldo Tersedia</p>
                        <p className="text-3xl font-black text-black-600">
                            Rp {saldoSekarang.toLocaleString('id-ID')}
                        </p>
                    </div>

                    <div className="text-center space-y-6">
                        <p className="text-gray-500 font-medium text-sm">Pilih Toko & Scan QR Code di bawah ini:</p>
                        
                        {/* Dropdown Toko */}
                        <select className="w-full p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm">
                            <option>-- Pilih Toko / Tujuan --</option>
                            <option>Koperasi Desa Sejahtera</option>
                            <option>Toko Sembako Makmur</option>
                        </select>

                        {/* QR CODE AREA */}
                        <div className="flex flex-col items-center justify-center space-y-4 py-6">
                            <div className="bg-white p-4 border-4 border-blue-600 rounded-2xl shadow-inner">
                                {/* Placeholder QR Code */}
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SOS-WALLET-PAYMENT" 
                                    alt="QR Code Pembayaran"
                                    className="w-48 h-48 opacity-90"
                                />
                            </div>
                            <p className="text-[10px] text-gray-400 font-mono italic">
                                *Tunjukkan kode ini ke kasir untuk discan
                            </p>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg transition active:scale-95 uppercase tracking-widest">
                            Konfirmasi Selesai
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}