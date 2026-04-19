import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Update({ auth, app_version, last_sync, changes }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Pembaruan Sistem" />

            <div className="p-10 max-w-2xl">
                <h1 className="text-2xl font-bold mb-8">Status Update</h1>

                {/* Box Versi Aplikasi */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mb-8 flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Versi Aplikasi</p>
                        <p className="text-2xl font-black text-blue-600">{app_version}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Update Terakhir</p>
                        <p className="font-semibold text-gray-700">{last_sync}</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}