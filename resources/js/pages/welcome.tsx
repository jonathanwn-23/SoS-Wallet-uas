import { Head, Link } from '@inertiajs/react';
import { login, register } from '@/routes'; 

export default function Welcome() {
    return (
        <>
            <Head title="Selamat Datang di SOS-WALLET" />
            
            {/* Background Gradasi */}
            <div className="min-h-screen bg-gradient-to-b from-[#e8ecf1] to-[#8fa0b5] flex flex-col items-center justify-center p-6 font-sans relative">

                {/* Konten Utama di tengah */}
                <div className="flex flex-col items-center flex-grow justify-center mt-10">
                    
                    {/* Ikon Dompet */}
                    <div className="bg-[#1e293b] p-5 rounded-3xl shadow-xl mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                    </div>

                    {/* Judul Utama */}
                    <h1 className="text-6xl md:text-7xl font-black text-black tracking-tighter mb-4 text-center">
                        SOS-WALLET
                    </h1>
                    
                    {/* Subjudul */}
                    <p className="text-[#334155] text-lg md:text-xl font-medium text-center max-w-2xl mb-16 leading-relaxed">
                        Sistem Terpadu Pemantauan dan Pengelolaan Bantuan <br className="hidden md:block" /> Keuangan Pemerintah.
                    </p>

                    {/* Bagian Panel Kendali Admin */}
                    <div className="flex flex-col items-center mb-12">
                        {/* Ikon Orang (User Group) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-[#0f172a]">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <h2 className="text-2xl font-bold text-[#0f172a]">Panel Kendali Admin</h2>
                        {/* Garis kecil di bawah teks */}
                        <div className="w-12 h-1 bg-black rounded-full mt-3"></div>
                    </div>

                    {/* Tombol Login dan Register dengan Animasi Hover */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto px-4">
                        <Link
                            href={login()} 
                            // Tambahan class: hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-16 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center text-lg"
                        >
                            Login
                        </Link>
                        <Link
                            href={register()}
                            // Tambahan class: hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                            className="bg-white hover:bg-gray-50 text-black font-bold py-4 px-16 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center text-lg"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="pb-6">
                    <p className="text-sm font-medium text-gray-700">
                        © 2026 SOS-WALLET. Hak Cipta Dilindungi.
                    </p>
                </div>

            </div>
        </>
    );
}