<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    use HasFactory;

    protected $table = 'contatos';



    protected $fillable = [
        'id',
        'user_id',
        'telefone_1',
        'telefone_2',
        'telefone_3',
        'email',
        'email_verificado',
    ];

    public function VerificarEndereco($data)
    {
        if(!empty($data))
        {
            return true;
        }

        return false;
    }
}
