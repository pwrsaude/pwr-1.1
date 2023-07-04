<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Onboard extends Model
{
    use HasFactory;

    protected $table = 'onboards';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */

    protected $primaryKey = 'onboard_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'uuid',
        'email',
        'stripe_id',
        'telefone',
        'codigo_pagamento',
        'cadastro_realizado',
        'email_corretor',
        'subscription',
        'cpf_cliente',
        'stripe_price',
        'quantity',
        'stripe_prod'
    ];
}
