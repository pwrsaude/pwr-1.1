<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    private $modelUser;
    private $userRepository;

    public function __construct()
    {
        $this->modelUser = $this->getModelUser();
        $this->userRepository = $this->getUserRepository();
    }

    private function getModelUser()
    {
        return new User();
    }

    private function getUserRepository()
    {
        return new UserRepository;
    }

    public function store($name, $password = null, $cpfCnpj, $nomePerfil = null)
    {
        try {

            $data = [
            'name' => $name,
            'password' => $password == null ? $this->setHashPassword($cpfCnpj) : $this->setHashPassword($password),
            'cpf_cnpj' => $this->setCpf($cpfCnpj),
            'nome_perfil' => $nomePerfil
            ];

            if (!empty($data))
            {
                if ($this->userRepository->newUser($data))
                {
                }
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível criar um usuário: {$th->getMessage()}",
                500
            );
        }
    }
}
