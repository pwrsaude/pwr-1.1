<?php

namespace App\Repositories;

use App\Models\Perfil;

class PerfilRepository
{

    private $modelPerfil;

    public function __construct()
    {
        $this->modelPerfil = $this->getModelPerfil();
    }

    private function getModelPerfil()
    {
        return new Perfil();
    }
    public function getPerfilByName($name)
    {
        return $this->modelPerfil->query()->where('name', $name)->first();
    }

}
