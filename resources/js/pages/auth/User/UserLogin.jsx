import Checkbox from '@/components/Checkbox';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: '',
        password: '',
        remember: false,
    });

const submit = (e) => {
    e.preventDefault();
      post('/login-user'); 
};

    return (
        <>
            <Head>
                <title>Log in</title>
            </Head>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="w-full max-w-md px-8 py-6 bg-white shadow-md rounded-xl border border-gray-100 mt-4">
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="nik" value="Masukkan Nomor Induk Kependudukan (NIK)" className="text-center" />

                    <TextInput
                    id="nik"
                    type="text"
                    name="nik"
                    value={data.nik}
                    maxLength={16}
                    // Tambahkan style inline di sini untuk memaksa warna teks hitam & bg putih
                    style={{ backgroundColor: 'white', color: 'black', border: '1px solid #d1d5db' }}
                    className="mt-1 block w-full text-center rounded-full"
                    autoComplete="off"
                    isFocused={true}
                    onChange={(e) => {
                    const hanyaAngka = e.target.value.replace(/\D/g, '');
                    setData('nik', hanyaAngka);
                }}
                />

                    <InputError message={errors.nik} className="mt-2 text-center" />
                </div>

                <div className="mt-6 flex items-center justify-center">
                    <button 
                    type="submit"
                    className={`w-full py-3 rounded-lg text-lg font-bold tracking-normal text-white shadow-md transition-all duration-200 
                        ${processing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
                    disabled={processing}>

                    Login
                </button>

                </div>
            </form>
        </div>
        </>
    );
}
