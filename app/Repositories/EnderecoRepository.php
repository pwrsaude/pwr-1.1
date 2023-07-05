<?php

namespace App\Repositories;

use App\Models\Endereco;

class EnderecoRepository
{

    private $modelEndereco;

    public function __construct()
    {
        $this->modelEndereco = $this->getModelEndereco();
    }

    private function getModelEndereco()
    {
        return new Endereco();
    }
    public function newEndereco($data)
    {
        if($this->modelEndereco->VerificadorEndereco($data))
        {
            $data['cep'] = str_pad($data['cep'], 8, '0', STR_PAD_LEFT);

            if($endereco = $this->modelEndereco->query()->create($data))
            {
                return $endereco;
            }

        }
    }
}
