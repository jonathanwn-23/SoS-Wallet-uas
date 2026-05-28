import React from 'react';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-3">
            
            {/* 1. Kotak Ikon Biru dengan Logo Dompet */}
            <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-[#0b6a95] text-white shadow-sm">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="size-6"
                >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
            </div>

            {/* 2. Area Teks bersusun Atas-Bawah */}
            <div className="flex flex-col justify-center text-left">
                
                {/* Teks Utama */}
                <span className="text-[17px] font-black leading-none text-[#0b6a95] tracking-wide">
                    SOS-WALLET
                </span>
                
                {/* Teks Kecil di Bawah */}
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Admin Terminal
                </span>
                
            </div>
        </div>
    );
}