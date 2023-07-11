<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produtos';

    protected $fillable = [
      'name',
      'description',
      'stripe_prod',
      'stripe_price',
      'tipo_produto_id'
    ];
}
