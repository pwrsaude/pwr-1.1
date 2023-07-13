<?php

namespace App\Repositories;

use App\Http\Controllers\Users\ClienteController;
use App\Http\Controllers\Users\UserController;
use App\Models\Onboard;

class OnboardRepository
{
    private $modelOnboard;
    private $userController;
    private $clienteController;

    public function __construct()
    {
        $this->modelOnboard = $this->getModelOnboard();
        $this->userController = new UserController;
        $this->clienteController = new ClienteController;
    }

    private function getModelOnboard()
    {
        return new Onboard();
    }

    public function criarCliente($data)
    {
        $onboard = $this->getOnboards($data['cpf_cnpj']);

        if (!$user = $this->userController->getUser(null, $data['cpf_cnpj'], null)) {
            $user = $this->userController->store
            (
                $data['name'],
                $data['email'],
                $data['password'],
                $data['cpf_cnpj'],
                'Cliente',
                1,
                $onboard->stripe_id
            );

            $cliente = $this->clienteController->store
            (
                $user->id,
                $user->stripe_id,
                $user->name,
                $user->cpf_cnpj,
                $user->email,
                $data['data_nascimento'],
                $data['sexo'],
                'active'
        );

        }
    }

    public function getOnboards($data)
    {
        $onboards = $this->modelOnboard->query();

        if (isset($data['email_corretor'])) {
            $onboards->where('email_corretor', $data['email_corretor'])->where('cadastro_realizado', false);
        }

        if (isset($data['id'])) {
            $onboards->where('id', $data['id'])->where('cadastro_realizado', false);
        }

        if (isset($data['cpf_cnpj'])) {
            $onboards->where('cpf_cliente', $data['cpf_cnpj'])->where('cadastro_realizado', false);
        }

        if (empty($data)) {
            $onboards->where('cadastro_realizado', false);
        }

        return $onboards->get();
    }



    public function finishOnboard($data)
    {
        if ($this->modelOnboard->query()->find($data['id'])->update(['cadastro_realizado' => 1])) {
            return true;
        }
    }

    public function store($data)
    {
        if (!empty($data)) {
            $onboard = $this->modelOnboard->query();

            if ($onboard->create($data)) {
                return $onboard;
            }
        }
    }

    public function setPriceOnboard($data)
    {
        if (isset($data['stripe_id'])) {
            $onboard = $this->modelOnboard->query()->where('stripe_id', $data['stripe_id']);

            $onboard->update([
                'stripe_price' => $data['stripe_price']
            ]);

            $onboard->update([
                'stripe_prod' => $data['stripe_prod']
            ]);
        }
    }

    public function setQuantity($data)
    {
        if (isset($data['stripe_id'])) {
            $onboard = $this->modelOnboard->query()->where('stripe_id', $data['stripe_id']);

            $onboard->update(['quantity' => $data['quantity']]);
        }
    }
}
