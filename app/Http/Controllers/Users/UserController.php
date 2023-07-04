<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

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
    public function store($nome, $password = null, $cpfCnpj, $nomePerfil = null)
    {
        $newUser = [

        ];
    }
}
