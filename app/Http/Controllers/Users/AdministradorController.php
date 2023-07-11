<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Repositories\AdministradorRepository;
use Exception;
use Illuminate\Http\Request;

class AdministradorController extends Controller
{

    private $administradorRepository;

    public function __construct()
    {
        $this->administradorRepository = $this->getAdministradorRepository();
    }

    private function getAdministradorRepository()
    {
        return new AdministradorRepository;
    }
    public function store($user_id, $status, $status_describle = null, $cpf, $email, $telefone, $name, $access_level = 3)
    {
        try {

            $data = [
                'user_id' => $user_id,
                'status' => $status,
                'status_describle' => $status_describle,
                'cpf_cnpj' => $cpf,
                'email' => $email,
                'password' => $cpf,
                'access_level' => $access_level
            ];

            if (!empty($data))
            {
                $newAdm = $this->administradorRepository->store($data);

                return $newAdm;
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível criar a permissão: {$th->getMessage()}",
                500
            );
        }
    }
}
