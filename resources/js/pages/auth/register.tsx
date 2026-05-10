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

export default function Register() {
    return (
        <>
            <Head title="Register" />

            {/* Kontainer utama full-screen */}
            <div className="min-h-screen flex w-full bg-white">
                
                {/* ==================== BAGIAN KIRI (Background Biru & Dekorasi) ==================== */}
                <div className="hidden lg:flex w-1/2 bg-[#b6d5fb] flex-col justify-center px-16 xl:px-24 relative overflow-hidden">
                    
                    {/* Lingkaran Dekoratif 1 (Atas Tengah) */}
                    <div className="absolute top-[-100px] left-[30%] w-[300px] h-[300px] border-[35px] border-[#6ea8fe] rounded-full z-0"></div>
                    
                    {/* Lingkaran Dekoratif 2 (Kiri Bawah) */}
                    <div className="absolute bottom-[-120px] left-[-80px] w-[350px] h-[350px] border-[35px] border-[#6ea8fe] rounded-full z-0"></div>

                    {/* Konten Utama Kiri */}
                    <div className="z-10 -mt-20 relative">
                        {/* Judul & Logo */}
                        <div className="flex items-center gap-4 mb-6">
                            {/* Icon Dompet (SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b85ff" className="w-12 h-12 xl:w-14 xl:h-14">
                                <path d="M21 7.5V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12.5c1.38 0 2.5 1.12 2.5 2.5V7.5h1zM18 10v4h3v-4h-3zm1.5 2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/>
                            </svg>
                            {/* Teks Logo */}
                            <h1 className="text-5xl xl:text-6xl font-black text-[#2b85ff] tracking-tight">
                                SOS-WALLET
                            </h1>
                        </div>
                        
                        {/* Sub-judul (Dibuat menjadi warna putih) */}
                        <h2 className="text-3xl xl:text-4xl text-white leading-relaxed font-medium">
                            Bantuan Aman <br /> Tanpa Perantara
                        </h2>
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