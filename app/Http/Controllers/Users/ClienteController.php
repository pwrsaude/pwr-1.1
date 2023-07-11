<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Repositories\CarteirinhaRepository;
use App\Repositories\ClienteRepository;
use Exception;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    private $clienteRepository;
    private $carteirinhaRepository;
    private $userController;

    public function __construct()
    {
        $this->clienteRepository = new ClienteRepository;
        $this->carteirinhaRepository = new CarteirinhaRepository;
        $this->userController = new UserController;
    }

    public function store($user_id, $stripe_id, $name, $cpf_cnpj, $email, $data_nascimento, $sexo, $status)
    {
        try {
            $data = [
                'user_id' => $user_id,
                'stripe_id' => $stripe_id,
                'name' => $name,
                'email' => $email,
                'cpf_cnpj' => $cpf_cnpj,
                'data_nascimento' => $data_nascimento,
                'sexo' => $sexo,
                'status' => $status
            ];

            if(!empty($data))
            {
                $cliente = $this->clienteRepository->store($data);

                return $cliente;
            }

        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }
}
