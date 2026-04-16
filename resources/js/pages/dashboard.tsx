import { Head } from '@inertiajs/react';

// Mendefinisikan tipe data agar TypeScript tidak error
interface DashboardProps {
    totalPenerima: number;
    totalRejected: number;
    totalPending: number;
    totalValidated: number;
}

export default function Dashboard({ totalPenerima, totalRejected, totalPending, totalValidated }: DashboardProps) {
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
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Total Penerima</h3>
                        <div className="mt-2 text-4xl font-bold text-blue-900">{totalPenerima}</div>
                        <p className="mt-1 text-xs text-blue-500 font-medium">Semua data masuk</p>
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
                        <p className="mt-1 text-xs text-yellow-600 font-medium">Menunggu validasi</p>
                    </div>

                    {/* Kotak 4: Total Validated (Hijau) */}
                    <div className="flex flex-col rounded-xl border border-green-100 bg-green-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider">Total Validated</h3>
                        <div className="mt-2 text-4xl font-bold text-green-900">{totalValidated}</div>
                        <p className="mt-1 text-xs text-green-500 font-medium">Data valid</p>
                    </div>

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