<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'category',
        'amount',
        'type',
    ];

    /**
     * Relasi ke tabel transactions.
     */
    public function user()
{
    // Transaksi ini milik seorang User
    return $this->belongsTo(User::class);
}
}