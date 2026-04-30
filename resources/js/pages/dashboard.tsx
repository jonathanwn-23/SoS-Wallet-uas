import { Head } from '@inertiajs/react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mendefinisikan tipe data agar TypeScript tidak error
interface DashboardProps {
    totalPenerima: number;
    totalRejected: number;
    totalPending: number;
    totalValidated: number;
    totalDanaTersalurkan: number;
    
}

export default function Dashboard({ totalPenerima, totalRejected, totalPending, totalValidated, totalDanaTersalurkan}: DashboardProps) {
        
        const dataGrafik = [
            { name: 'Validated', value: totalValidated, color: '#10b981' }, // Hijau Tailwind
            { name: 'Pending', value: totalPending, color: '#fbbf24' },   // Kuning Tailwind
            { name: 'Rejected', value: totalRejected, color: '#ef4444' },  // Merah Tailwind
        ];

        // Fungsi untuk memformat angka menjadi Rupiah
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
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                
                {/* Bagian Judul (Tanpa tombol hitam di sebelah kanan) */}
                <div className="mb-2">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Selamat datang! Berikut adalah ringkasan data SOS-WALLET Anda.</p>
                </div>

                {/* Grid untuk 4 Kotak Berwarna */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Kotak 1: Total Penerima (Biru) */}
                    <div className="flex flex-col rounded-xl border border-blue-100 bg-blue-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Total Data Tercatat</h3>
                        <div className="mt-2 text-4xl font-bold text-blue-900">{totalPenerima}</div>
                        <p className="mt-1 text-xs text-blue-500 font-medium">Data penerima</p>
                    </div>

                    {/* Kotak 2: Total Rejected (Merah) */}
                    <div className="flex flex-col rounded-xl border border-red-100 bg-red-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider">Total Rejected</h3>
                        <div className="mt-2 text-4xl font-bold text-red-900">{totalRejected}</div>
                        <p className="mt-1 text-xs text-red-500 font-medium">Data yang ditolak</p>
                    </div>

                    {/* Kotak 3: Total Pending (Kuning) */}
                    <div className="flex flex-col rounded-xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">Total Pending</h3>
                        <div className="mt-2 text-4xl font-bold text-yellow-900">{totalPending}</div>
                        <p className="mt-1 text-xs text-yellow-600 font-medium">Data menunggu validasi</p>
                    </div>

                    {/* Kotak 4: Total Validated (Hijau) */}
                    <div className="flex flex-col rounded-xl border border-green-100 bg-green-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider">Total Validated</h3>
                        <div className="mt-2 text-4xl font-bold text-green-900">{totalValidated}</div>
                        <p className="mt-1 text-xs text-green-500 font-medium">Data tervalidasi</p>
                    </div>

                    </div>

                    {/* Kotak Total Dana Tersalurkan */}
                    <div className="mt-6 w-full flex flex-col rounded-xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Jumlah Dana Yang Tersalurkan</h3>
                        <div className="mt-2 text-4xl font-bold text-indigo-900">
                            {formatRupiah(totalDanaTersalurkan)}
                        </div>
                        <p className="mt-1 text-xs text-indigo-600 font-medium">Akumulasi bantuan tunai khusus penerima terverifikasi valid</p>
                    </div>
                </div>

                    {/* Wadah Grafik */}
                    <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full max-w-md">
                        <h3 className="text-lg font-bold text-gray-700 mb-4">Grafik Status Penerima</h3>
                        
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataGrafik}
                                        innerRadius={60} /* Membuat efek donat (lubang di tengah) */
                                        outerRadius={80}
                                        paddingAngle={5} /* Jarak antar potongan */
                                        dataKey="value"
                                    >
                                        {dataGrafik.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        formatter={(value) => [`${value} Orang`, 'Jumlah']}
                                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
        </>
    );
}

// Konfigurasi top bar (breadcrumbs)
Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
    ],
};