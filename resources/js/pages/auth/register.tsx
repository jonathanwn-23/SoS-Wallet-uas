import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Link } from '@inertiajs/react';

export default function Register() {
    return (
        <>
            <Head title="Register" />

            {/* Kontainer utama full-screen */}
            <div className="min-h-screen flex w-full bg-white">
                
            {/* ===================== BAGIAN KIRI (Background Biru & Dekorasi) ===================== */}
            {/* Mengubah bg-black menjadi biru solid dan justify-end menjadi justify-center */}
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

                {/* ==================== BAGIAN KANAN (Formulir Pendaftaran) ==================== */}
                <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12">
                    <div className="w-full max-w-md">
                        
                        {/* Header Form */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-black mb-2">Create an account</h2>
                            <p className="text-gray-600 text-sm">Enter your details below to create your account</p>
                        </div>

                        {/* Logika dan Form Pendaftaran */}
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password', 'password_confirmation']}
                            disableWhileProcessing
                            className="flex flex-col gap-5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-2 text-left">
                                        <Label htmlFor="name" className="font-bold text-black">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Full name"
                                            className="rounded-md border-gray-300"
                                        />
                                        <InputError message={errors.name} className="mt-1" />
                                    </div>

                                    <div className="grid gap-2 text-left">
                                        <Label htmlFor="email" className="font-bold text-black">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                            className="rounded-md border-gray-300"
                                        />
                                        <InputError message={errors.email} className="mt-1" />
                                    </div>

                                    <div className="grid gap-2 text-left">
                                        <Label htmlFor="password" className="font-bold text-black">Password</Label>
                                        <PasswordInput
                                            id="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Password"
                                            className="rounded-md border-gray-300"
                                        />
                                        <InputError message={errors.password} className="mt-1" />
                                    </div>

                                    <div className="grid gap-2 text-left">
                                        <Label htmlFor="password_confirmation" className="font-bold text-black">Confirm Password</Label>
                                        <PasswordInput
                                            id="password_confirmation"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirm Password"
                                            className="rounded-md border-gray-300"
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-1" />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#2b85ff] hover:bg-blue-600 text-white py-3 rounded-md mt-4 font-semibold text-base transition-colors"
                                    >
                                        {processing ? <Spinner /> : 'Create account'}
                                    </Button>

                                    {/* Link menuju Login Khusus Admin */}
                                    <div className="text-center mt-2 text-sm">
                                        <span className="text-gray-600">Already have an account? </span>
                                        <TextLink href="/login-admin" className="font-bold text-black hover:underline">
                                            Log in
                                        </TextLink>
                                    </div>
                                </>
                            )}
                        </Form>

                    </div>
                </div>
            </div>
        </>
    );
}

// Menonaktifkan layout bawaan agar tetap menggunakan layar secara penuh
Register.layout = (page: React.ReactNode) => <>{page}</>;