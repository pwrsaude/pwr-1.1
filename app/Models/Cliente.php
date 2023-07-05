<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Contato;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'clientes';

    protected $fillable = [
        'id',
        'user_id',
        'stripe_id',
        'name',
        'cpf_cnpj',
        'email',
        'carteirinha',
        'data_nascimento',
        'sexo',
        'cliente_dependente',
        'status'
    ];

    protected $casts = [
        'cliente_dependente' => 'bool',
        'data_nascimento' => 'datetime'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function Contato()
    {
        return $this->hasOne(Contato::class, 'user_id');
    }
}
