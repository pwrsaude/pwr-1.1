<?php

namespace App\Repositories;

use App\Models\Contato;

class ContatoRepository
{
    private $modelContato;

    public function __construct()
    {
        $this->modelContato = $this->getModelContato();
    }

    private function getModelContato()
    {
        return new Contato();
    }

    public function newContato($data)
    {
        if($this->modelContato->VerificarEndereco($data))
        {
            $endereco = $this->modelContato->query()->create($data);

            return $endereco;
        }
    }

    public function getContatoByUserId($data)
    {
        if(isset($data['user_id']))
        {
            $contato = $this->modelContato->query()->where('user_id', $data['user_id']);

            return $contato->get();
        }
    }
}
