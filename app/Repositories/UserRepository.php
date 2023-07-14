<?php

namespace App\Repositories;

use App\Http\Controllers\Auth\PerfilController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserRepository
{

    private $modelUser;
    private $permissaoRepository;
    private $perfilController;


    public function __construct()
    {
        $this->modelUser = $this->getModelUser();
        $this->permissaoRepository = $this->getPermissaoRepository();
        $this->perfilController = $this->getPerfilController();
    }

    private function getPerfilController()
    {
        return new PerfilController;
    }

    private function getPermissaoRepository()
    {
    }

    private function getModelUser()
    {
        return new User();
    }

    private function setBycrypt($password)
    {
        return bcrypt($password);
    }

    private function setCpf($cpfCnpj)
    {
        return strlen($cpfCnpj) > 11 ? str_pad($cpfCnpj, 14, '0', STR_PAD_LEFT) : str_pad($cpfCnpj, 11, '0', STR_PAD_LEFT);
    }

    public function newUser($data)
    {
        $newUser = [
            'pid' => Str::random(8),
            'name' => $data['name'],
            'password' => bcrypt($data['password']),
            'cpf_cnpj' => $this->setCpf($data['cpf_cnpj']),
            'email' => $data['email'],
            'access_level' => $data['access_level'],
            'stripe_id' => $data['stripe_id']

        ];

        if ($user = $this->modelUser->create($newUser)) {
            // if(!is_null($data['nome_perfil']))
            // {
            //     $user->Perfis()->attach($this->perfilController->getPerfilByName($data['nome_perfil'])->perfil_id);
            // }

            return $user;
        }
    }

    public function getUser($data)
    {

        $user = $this->modelUser->query()->where(function ($query) use ($data) {
            if (!empty($data)) {
                $query->where('id', $data['user_id']);
                $query->orWhere('cpf_cnpj', $data['cpf_cnpj']);
                $query->orWhere('email', $data['email']);
            }
        });

        return $user->get();
    }
}
