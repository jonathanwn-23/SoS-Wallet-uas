import React from "react";
import { Head, useForm } from "@inertiajs/react";

const UserLogin = () => {
    // 1. LOGIKA BAWAAN: Form state dan fungsi submit dipertahankan sepenuhnya
    const { data, setData, post, processing, errors } = useForm({
        nik: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login-user");
    };

    return (
        <>
            <Head title="Login User - SOS-WALLET" />

            {/* Wadah Utama: Membagi layar menjadi 2 bagian yang sama besar */}
            <div className="min-h-screen flex w-full font-sans">
                
                {/* ==================== BAGIAN KIRI (Latar Biru) ==================== */}
                <div className="hidden lg:flex w-1/2 bg-[#b6d5fb] flex-col justify-center items-center px-8 relative overflow-hidden">
                    
                    {/* Wadah pembungkus agar semua elemen di dalamnya rata tengah secara vertikal */}
                    <div className="z-10 flex flex-col items-center text-center gap-4 -mt-16">
                        
                        {/* Ikon Dompet: Posisinya sekarang tepat di atas teks */}
                        <div className="bg-[#2b85ff] p-4 rounded-xl shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                <path d="M21 7.5V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12.5c1.38 0 2.5 1.12 2.5 2.5V7.5h1zM18 10v4h3v-4h-3zm1.5 2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/>
                            </svg>
                        </div>
                        
                        {/* Judul: SOS-WALLET dengan efek stroke hitam rapi */}
                        <h1 
                            className="text-5xl xl:text-[56px] font-black font-sans text-white tracking-widest mt-2"
                            style={{ 
                                WebkitTextStroke: "1.5px black",
                                paintOrder: "stroke fill" 
                            }}
                        >
                            SOS-WALLET
                        </h1>
                        
                        {/* Subjudul */}
                        <h2 className="text-2xl xl:text-3xl text-white font-bold leading-relaxed mt-2">
                            Bantuan Aman <br /> Tanpa Perantara
                        </h2>
                    </div>
                </div>

                {/* ==================== BAGIAN KANAN (Formulir Login) ==================== */}
                <div className="w-full lg:w-1/2 bg-[#f4f5f7] flex items-center justify-center relative overflow-hidden p-8">
                    
                    {/* Ornamen Dompet Pudar Atas: Disesuaikan posisinya agar menempel di atas */}
                    <div className="absolute top-[-40px] left-[20%] w-64 h-64 opacity-25 transform -rotate-12 text-[#9abef0]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M21 7.5V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12.5c1.38 0 2.5 1.12 2.5 2.5V7.5h1zM18 10v4h3v-4h-3zm1.5 2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/></svg>
                    </div>

                    {/* Ornamen Dompet Pudar Bawah: Disesuaikan posisinya di pojok kanan bawah */}
                    <div className="absolute bottom-[-60px] right-[-40px] w-72 h-72 opacity-25 transform rotate-12 text-[#9abef0]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M21 7.5V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12.5c1.38 0 2.5 1.12 2.5 2.5V7.5h1zM18 10v4h3v-4h-3zm1.5 2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/></svg>
                    </div>

                    {/* Card Form Login */}
                    <div className="z-10 bg-white border border-gray-400 rounded-xl p-8 max-w-sm w-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            
                            {/* Label Input */}
                            <label className="text-center font-bold text-black text-[12px] xl:text-sm tracking-wide">
                                Masukkan Nomor Induk Kependudukan (NIK)
                            </label>

                            {/* Input NIK: Logika 16 angka dipertahankan */}
                            <div>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={data.nik}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value) && value.length <= 16) {
                                            setData("nik", value);
                                        }
                                    }}
                                    maxLength={16}
                                    className="w-full bg-transparent border border-black rounded-lg py-2 px-3 text-center text-lg tracking-[0.05em] font-medium focus:ring-2 focus:ring-[#2b85ff] outline-none transition-all"
                                    placeholder="Silahkan masukkan NIK"
                                    required
                                />
                                {/* Pesan Error Laravel */}
                                {errors.nik && (
                                    <p className="text-red-500 text-xs text-center mt-2 font-medium">
                                        {errors.nik}
                                    </p>
                                )}
                            </div>

                            {/* Tombol Login */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#2b85ff] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-70 mt-2"
                            >
                                Login
                            </button>

                        </form>
                    </div>
                </div>
                
            </div>
        </>
    );
};

// Menonaktifkan layout bawaan agar desain bisa terbentang penuh (full-screen)
UserLogin.layout = (page) => <>{page}</>;

export default UserLogin;