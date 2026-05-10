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

                {/* ==================== BAGIAN KIRI (Sama Persis dengan Register) ==================== */}
                <div className="hidden lg:flex w-1/2 bg-[#b6d5fb] flex-col justify-center px-16 xl:px-24 relative overflow-hidden">
                    
                    {/* Lingkaran Dekoratif 1 (Atas Tengah) */}
                    <div className="absolute top-[-100px] left-[30%] w-[300px] h-[300px] border-[35px] border-[#6ea8fe] rounded-full z-0"></div>
                    
                    {/* Lingkaran Dekoratif 2 (Kiri Bawah) */}
                    <div className="absolute bottom-[-120px] left-[-80px] w-[350px] h-[350px] border-[35px] border-[#6ea8fe] rounded-full z-0"></div>

                    <div className="z-10 -mt-20 relative">
                        <div className="flex items-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b85ff" className="w-12 h-12 xl:w-14 xl:h-14">
                                <path d="M21 7.5V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12.5c1.38 0 2.5 1.12 2.5 2.5V7.5h1zM18 10v4h3v-4h-3zm1.5 2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/>
                            </svg>
                            <h1 className="text-5xl xl:text-6xl font-black text-[#2b85ff] tracking-tight">
                                SOS-WALLET
                            </h1>
                        </div>
                        <h2 className="text-3xl xl:text-4xl text-white leading-relaxed font-medium">
                            Bantuan Aman <br /> Tanpa Perantara
                        </h2>
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