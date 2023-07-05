<?php

namespace App\Repositories;

use App\Models\Perfil;
use App\Models\User;
use Illuminate\Support\Str;

class PerfilRepository
{

    private $modelPerfil;
    private $modelUser;

    public function __construct()
    {
        $this->modelPerfil = $this->getModelPerfil();
        $this->modelUser = $this->getModelUser();
    }

    private function getModelUser()
    {
        return new User();
    }

    private function getModelPerfil()
    {
        return new Perfil();
    }

    public function newPerfil($data)
    {

        $data['code'] = Str::ascii(Str::snake(mb_strtolower($data['name'])));

        $perfil = $this->modelPerfil->query();

        $perfil->create($data);

        return $perfil;
    }

    public function getPerfilByName($data)
    {
        return $this->modelPerfil->query()->where('name', $data['name'])->first();
    }

    public function getPerfilById($data)
    {
        return $this->modelPerfil->query()->find($data['id']);
    }

    public function atribuirPerfil($data)
    {
        if(isset($data['pid']))
        {
            $user = $this->modelUser->query()->where('pid', $data['pid'])->first();

            $user->Perfis()->attach($this->getPerfilByName($data['perfil_nome'])->perfil_id);
        }
    }

}
