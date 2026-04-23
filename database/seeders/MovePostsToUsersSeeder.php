<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class MovePostsToUsersSeeder extends Seeder
{
    public function run(): void
    {
        // Ambil semua data dari tabel posts
        $posts = DB::table('posts')->get();

        foreach ($posts as $post) {
            // Masukkan ke tabel users
            User::updateOrCreate(
                ['nik' => $post->nik], // Cek agar tidak duplikat
                [
                    'name'   => $post->recepient_validation,
                    'role'   => 'user',
                    'status' => $post->status,
                    // Email dan password dibiarkan null
                ]
            );
        }
    }
}