<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    private $modelUser;

    public function __construct()
    {
        $this->modelUser = $this->getModelUser();
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
    public function store($name, $password = null, $cpfCnpj, $nomePerfil = null)
    {
        $newUser = [
            'pid' => Str::random(8),
            'name' => $name,
            'password' => $password == null ? $this->setHashPassword($cpfCnpj) : $this->setHashPassword($password),
            'cpf_cnpj' => $this->setCpf($cpfCnpj)
        ];
    }
}
