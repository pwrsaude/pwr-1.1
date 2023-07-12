<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ControleAssinatura extends Model
{
    use HasFactory;

    protected $table = 'controle_assinaturas';

    protected $fillable = [
        'id',
        'user_id',
        'cliente_id',
        'stripe_prod',
        'stripe_price',
        'stripe_id',
        'status',
        'subscription_id',
    ];
}
