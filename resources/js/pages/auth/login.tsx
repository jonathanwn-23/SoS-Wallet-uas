import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PasswordInput from '@/components/password-input';

export default function LoginAdmin() {
    // Logika form bawaan dari Laravel Breeze/Inertia
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Pastikan endpoint '/login-admin' ini sesuai dengan route POST milikmu
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            {/* Background utama dibedakan sedikit (abu-abu sangat terang) untuk bagian kanan */}
            <div className="min-h-screen flex w-full bg-[#f8f9fa]">

            {/* ===================== BAGIAN KIRI (Background Biru & Dekorasi) ===================== */}
            <div className="relative hidden w-1/2 lg:flex flex-col items-center justify-center bg-[#061e87]">
                
                {/* 1. Gambar Gembok 3D (Pastikan gembok.png ada di folder public) */}
                <img 
                    src="/gembok.png" 
                    alt="Ilustrasi Keamanan" 
                    className="w-[400px] lg:w-[550px] h-auto object-contain mb-12 drop-shadow-2xl"
                />

                {/* 2. Teks di bawah gambar */}
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* ===== DIBUNGKUS DENGAN LINK AGAR BISA DIKLIK (LOGIC TETAP AMAN 100%) ===== */}
                    <Link 
                        href="/admin" 
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <h1 
                            className="text-white text-5xl md:text-6xl font-black tracking-widest mb-4"
                            style={{
                                WebkitTextStroke: '2.5px black',
                                textShadow: '4px 4px 6px rgba(0,0,0,0.6)',
                                cursor: 'pointer' 
                            }}
                        >
                            SOS-WALLET
                        </h1>
                    </Link>

                    {/* Sub-teks yang ukurannya diperbesar dan warnanya disesuaikan dengan Figma */}
                    <p className="text-[#fde047] text-base md:text-[18px] font-medium uppercase tracking-[0.4em] drop-shadow-md">
                        Bantuan Aman Tanpa Perantara
                    </p>

                </div>
            </div>

                {/* ==================== BAGIAN KANAN (Formulir Login) ==================== */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-black mb-2">Log in to your account</h2>
                            <p className="text-gray-600 text-sm">Enter your email and password below to log in</p>
                        </div>

                        <form onSubmit={submit} className="flex flex-col gap-5">
                            
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="email" className="font-bold text-black">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="rounded-md border-gray-300 w-full"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            <div className="grid gap-2 text-left">
                                <Label htmlFor="password" className="font-bold text-black">Password</Label>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    className="rounded-md border-gray-300 w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                />
                                <InputError message={errors.password} className="mt-1" />
                            </div>

                            <div className="flex items-center mt-1">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="rounded border-gray-300 text-[#2b85ff] shadow-sm focus:ring-[#2b85ff]"
                                    />
                                    <span className="ms-2 text-sm font-bold text-black">Remember me</span>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#2b85ff] hover:bg-blue-600 text-white py-3 rounded-md mt-4 font-semibold text-base transition-colors"
                            >
                                Log in
                            </Button>

                            <div className="text-center mt-2 text-sm">
                                <span className="text-gray-600">Don't have an account? </span>
                                <Link href="/register" className="font-bold text-black hover:underline">
                                    Sign up
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

// Membuang layout kotak bawaan laravel agar bisa full-screen
LoginAdmin.layout = (page: React.ReactNode) => <>{page}</>;