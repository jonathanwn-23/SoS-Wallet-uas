<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request)
    {
        // ambil kata kunci pencarian dari URL 
        $search = $request->input('search');

        // buat query dasar ke database
        $posts = User::query()->where('role', 'user')
            ->when($search, function ($query, $search) {
                $query->where(function($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('nik', 'like', "%{$search}%")
                      ->orWhere('status', 'like', "%{$search}%");
                });
            })
            ->paginate(10)
            ->withQueryString();

        // kirim data posts dan kata kunci pencarian kembali ke React
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
