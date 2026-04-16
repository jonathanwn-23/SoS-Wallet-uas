<?php

namespace App\Http\Controllers;

use App\Models\Post;
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

        // 2. Buat query dasar
        $posts = Post::query()
            ->when($search, function ($query, $search) {
                // Cari berdasarkan nama penerima ATAU nik ATAU status
                $query->where('recepient_validation', 'like', "%{$search}%")
                      ->orWhere('nik', 'like', "%{$search}%")
                      ->orWhere('status', 'like', "%{$search}%");
            })
            // 3. Potong menjadi 10 data per halaman dan simpan kata kunci di URL pagination
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

        Post::create($data);

        return redirect()-> route('posts.index')->with('succes', 'data berhasil disimpan');

    }

    //method untuk ubah data 
    public function update(Request $request, Post $post) {
        //validasi input
        $request -> validate([
            'recepient_validation' => 'required|string|max:255',
            'nik' => 'required|string|max:16',
            'status' => 'required|string',
        ]);

        $data = $request ->only(['recepient_validation', 'nik', 'status']);

        $post->update($data);
        return redirect()-> route('posts.index')->with('succes', 'data berhasil diubah');

    }

    //buat function hapus
    public function destroy(Post $post) {
        $post->delete();
         return redirect()-> route('posts.index')->with('succes', 'data berhasil dihapus');
    }

}
