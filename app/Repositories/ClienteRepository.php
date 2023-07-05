<?php

namespace App\Repositories;

use App\Http\Controllers\Users\ContatoController;
use App\Models\Cliente;
use App\Http\Controllers\Users\UserController;

class ClienteRepository
{
    private $modelCliente;
    private UserController $userController;
    private CarteirinhaRepository $carteirinhaRepository;

    public function __construct()
    {
        $this->modelCliente = $this->getModelCliente();
    }

    private function getModelCliente()
    {
        return new Cliente();
    }

    public function newCliente($data)
    {
        if($user = $this->userController->getUser($data['user_id']))
        {
            $data['cpf_cnpj'] = strlen($data['cpf_cnpj']) > 11 ? str_pad($data['cpf_cnpj'], 14, '0', STR_PAD_LEFT) : str_pad($data['cpf_cnpj'], 11, '0', STR_PAD_LEFT);

            $newCliente = [
                'user_id' => $user->id,
                'name' => $user->name,
                'cpf_cnpj' => $data['cpf_cnpj'],
                'data_nascimento' => $data['data_nascimento'],
                'sexo' => $data['sexo'],
                'status' => 'ativo'
            ];

            $cliente = $this->modelCliente->query()->create($newCliente);

            $this->carteirinhaRepository->newCarteirinha($cliente);

            return $cliente;
        }
    }
}
