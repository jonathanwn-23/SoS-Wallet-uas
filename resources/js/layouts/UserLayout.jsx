import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function UserLayout({ children }) {
    return (
        // Pakai tanda ! (important) agar Tailwind menang lawan Dark Mode
        <div className="flex min-h-screen flex-col items-center justify-center !bg-black pt-6 sm:pt-0">
            
            <div className="mt-6 w-full overflow-hidden bg-white px-10 py-8 shadow-md sm:max-w-md sm:rounded-3xl">
                {children}
            </div>
        </div>
    );
}