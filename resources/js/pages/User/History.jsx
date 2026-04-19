import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function History({ auth, transactions }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Riwayat Transaksi" />
            
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Riwayat Transaksi</h1>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {transactions && transactions.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {transactions.map((t) => (
                                <div key={t.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                                    <div>
                                        <p className="font-bold text-gray-800 text-lg">{t.title}</p>
                                        <p className="text-gray-500 text-sm">{t.category}</p>
                                        <p className="text-gray-400 text-xs">{new Date(t.created_at).toLocaleDateString('id-ID')}</p>
                                    </div>
                                    <div className={`text-xl font-bold ${t.type === 'in' ? 'text-green-500' : 'text-red-500'}`}>
                                        {t.type === 'in' ? '+' : '-'} Rp {parseFloat(t.amount).toLocaleString('id-ID')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-10 text-center text-gray-500">
                            <p className="text-xl">Belum ada riwayat transaksi.</p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}