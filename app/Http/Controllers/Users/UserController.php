<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use Exception;
use Illuminate\Http\Request;

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

    public function store($name,  $email, $password = null, $cpfCnpj, $nomePerfil = null, $access_level, $stripe_id = null)
    {
        try {

            $data = [
            'name' => $name,
            'email' => $email,
            'password' => $password = null ? $cpfCnpj : $password,
            'cpf_cnpj' => $cpfCnpj,
            'nome_perfil' => $nomePerfil,
            'access_level' => $access_level,
            'stripe_id' => $stripe_id
            ];

            if (!empty($data))
            {
                if ($user = $this->userRepository->newUser($data))
                {
                    return $user;
                }
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível criar um usuário: {$th->getMessage()}",
                500
            );
        }
    }

    public function getUser($user_id = null, $cpf_cnpj = null, $email = null)
    {
        try {

            $data = [
                'user_id' => $user_id,
                'cpf_cnpj' => $cpf_cnpj,
                'email' => $email
            ];

            if(!empty($data))
            {
                if($user = $this->userRepository->getUser($data))
                {
                    return $user;
                }

                return false;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível encontrar o usuário: {$th->getMessage()}",
                500
            );
        }
    }
}
