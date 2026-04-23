<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    //method panggilan halaman tabel
    public function index(Request $request): Response
    {
        // 1. Ambil kata kunci pencarian dari URL (jika ada)
        $search = $request->input('search');

        // 2. Buat query dasar ke database
        $posts = User::query()->where('role', 'user') 
        ->when($search, function ($query, $search) {
        $query->where('name', 'like', "%{$search}%") // name, bukan recepient_validation
              ->orWhere('nik', 'like', "%{$search}%")
              ->orWhere('status', 'like', "%{$search}%");
    })
        ->paginate(10)
        ->withQueryString();

        // 4. Kirim data posts dan kata kunci pencarian kembali ke React
        return Inertia::render('posts', [
            'posts' => $posts,
            'filters' => $request->only(['search'])
        ]);
    }

    //method mengirim data ke database
    public function store(Request $request) {
        //validasi input
        $request -> validate([
            'recepient_validation' => 'required|string|max:255',
            'nik' => 'required|string|max:16',
            'status' => 'required|string',
        ]);

        $data = $request ->only(['recepient_validation', 'nik', 'status']);

        //untuk menyimpan data ke tabel posts database
        User::create([
            'name'   => $request->recepient_validation,
            'nik'    => $request->nik,
            'status' => $request->status,
            'role'   => 'user',
        ]);

        return redirect()-> route('posts.index')->with('succes', 'data berhasil disimpan');

    }

    //method untuk ubah data 
    public function update(Request $request, User $post) {
        //validasi input
        $request -> validate([
            'recepient_validation' => 'required|string|max:255',
            'nik' => 'required|string|max:16',
            'status' => 'required|string',
        ]);

        $post->update([
            'name'   => $request->recepient_validation,
            'nik'    => $request->nik,
            'status' => $request->status,
        ]);

        return redirect()-> route('posts.index')->with('succes', 'data berhasil diubah');
    }

    //buat function hapus
    public function destroy(User $post) {
        $post->delete();
         return redirect()-> route('posts.index')->with('succes', 'data berhasil dihapus');
    }

}
