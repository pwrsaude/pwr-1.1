<?php

namespace App\Repositories;

use App\Models\Cliente;

class CarteirinhaRepository
{

    public function newCarteirinha(Cliente $cliente)
    {
        $cliente->carteirinha = date("Y") . date("m") . substr(str_repeat(0, 4) . $cliente->id, -4);

        $cliente->save();

        return $cliente->carteirinha;
    }
}
