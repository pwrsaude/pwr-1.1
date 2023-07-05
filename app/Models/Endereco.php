<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Endereco extends Model
{
    use HasFactory;

    protected $table = 'enderecos';

    protected $fillable = [
        'id',
        'user_id',
        'status',
        'cep',
        'logradouro',
        'numero',
        'cidade',
        'bairro',
        'complemento',
        'uf',
        'pais'
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function VerificadorEndereco($data)
    {
        if(!empty($data))
        {
            return true;
        }

        return false;
    }
}
