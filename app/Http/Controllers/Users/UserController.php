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

    public function store($name,  $email, $password = null, $cpfCnpj, $nomePerfil = null)
    {
        try {

            $data = [
            'name' => $name,
            'email' => $email,
            'password' => $password = null ? $cpfCnpj : $password,
            'cpf_cnpj' => $cpfCnpj,
            'nome_perfil' => 'Administrador'
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

    public function getUser($user_id)
    {
        try {

            $data = [
                'user_id' => $user_id
            ];

            if(!empty($data))
            {
                $user = $this->userRepository->getUser($data);

                return $user;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível encontrar o usuário: {$th->getMessage()}",
                500
            );
        }
    }
}
