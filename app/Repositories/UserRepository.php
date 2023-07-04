<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserRepository
{

    private $modelUser;
    private $permissaoRepository;


    public function __construct()
    {
        $this->modelUser = $this->getModelUser();
        $this->permissaoRepository = $this->getPermissaoRepository();
    }

    private function getPermissaoRepository()
    {

    }

    private function getModelUser()
    {
        return new User();
    }

    private function setHashPassword($password)
    {
        return Hash::make($password);
    }

    private function setCpf($cpfCnpj)
    {
        return strlen($cpfCnpj) > 11 ? str_pad($cpfCnpj, 14, '0', STR_PAD_LEFT) : str_pad($cpfCnpj, 11, '0', STR_PAD_LEFT);
    }

    public function newUser($data, $nomePerfil)
    {
        $newUser = [
            'pid' => Str::random(8),
            'name' => $data['name'],
            'password' => $data['password'] == null ? $this->setHashPassword($data['password']) : $this->setHashPassword($data['password']),
            'cpf_cnpj' => $this->setCpf($data['cpf_cnpj'])
        ];

        if($user = $this->modelUser->create($newUser))
        {
            if(!is_null($nomePerfil))
            {

            }
        }
    }
}
