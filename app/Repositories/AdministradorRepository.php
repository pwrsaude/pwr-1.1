<?php

namespace App\Repositories;

use App\Http\Controllers\Users\UserController;
use App\Models\Administrador;

class AdministradorRepository
{
    private $modelAdministrador;
    private $userController;

    public function __construct()
    {
        $this->modelAdministrador = $this->getModelAdm();
        $this->userController = new UserController;
    }

    private function getModelAdm()
    {
        return new Administrador();
    }

    public function store($data)
    {
        if(!empty($data))
        {

            $user = $this->userController->store($data['name'], $data['email'], $data['cpf_cnpj'], $data['cpf'], 'Administrador', 5);

            if($user)
            {
                $adm = [
                    'user_id' => $user->id,
                'status' => $data['status'],
                'status_describle' => $data['status_describle']
                ];

                $newAdm = $this->modelAdministrador->query();

            if($newAdm->create($adm))
            {
                return $newAdm;
            }
            }

        }
    }
}
