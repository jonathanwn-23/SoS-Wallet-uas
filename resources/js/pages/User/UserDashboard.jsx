import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                    Selamat Datang {auth.user.name} !
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Apa yang bisa kami bantu?
                </p>
            </div>
        </AuthenticatedLayout>
    );
}

Dashboard.layout = (page) => page;