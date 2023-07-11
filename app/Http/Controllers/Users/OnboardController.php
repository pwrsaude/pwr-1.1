<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Repositories\OnboardRepository;
use Exception;
use Illuminate\Http\Request;

class OnboardController extends Controller
{
    private $onboardRepository;

    public function __construct()
    {
        $this->onboardRepository = $this->getOnboardRepository();
    }

    private function getOnboardRepository()
    {
        return new OnboardRepository;
    }

    public function getOnboards($emailCorretor = null, $id = null)
    {
        try {
            $data = [];
            if(!is_null($emailCorretor))
            {
                $data = [
                    'email_corretor' => $emailCorretor
                ];
            }

            if(!is_null($id))
            {
                $data = [
                    'email_corretor' => $id
                ];
            }

            return $this->onboardRepository->getOnboards($data);
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }

    public function finalizarOnboard($id)
    {
        try {

            $data = [
                'id' => $id
            ];

            if(!empty($data))
            {
                $this->onboardRepository->finishOnboard($data);
            }

        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível finalizar o cadastro onboard: {$th->getMessage()}",
                500
            );
        }
    }

    public function store(
        $email,
        $stripe_id,
        $subscription,
        $cpf_cliente,
        $quantity,
        $stripe_price,
        $stripe_prod,
        $telefone,
        $codigo_pagamento,
        $email_corretor,
        $uuid)
    {
        try {

            $data = [
                'email' => $email,
                'stripe_id' => $stripe_id,
                'subscription' => $subscription,
                'cpf_cliente' => $cpf_cliente,
                'quantity' => $quantity,
                'stripe_price' => $stripe_price,
                'stripe_prod' => $stripe_prod,
                'telefone' => $telefone,
                'codigo_pagamento' => $codigo_pagamento,
                'email_corretor' => $email_corretor,
                'uuid' => $uuid
            ];

            if(!empty($data))
            {
                $this->onboardRepository->store($data);
            }

        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gerar o onboard: {$th->getMessage()}",
                500
            );
        }
    }

    public function setPriceOnboard($stripe_id, $stripe_price, $stripe_prod)
    {
        try {

            $data = [
                'stripe_id' => $stripe_id,
                'stripe_price' => $stripe_price,
                'stripe_prod' => $stripe_prod
            ];
            if(!empty($data))
            {
                $this->onboardRepository->setPriceOnboard($data);
            }

        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o stripe_price: {$th->getMessage()}",
                500
            );
        }
    }

    public function setQuantityPlan($stripe_id, $quantity)
    {
        try {

            $data = [
                'stripe_id' => $stripe_id,
                'quantity' => $quantity,
            ];
            if(!empty($data))
            {
                $this->onboardRepository->setQuantity($data);
            }

        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o stripe_price: {$th->getMessage()}",
                500
            );
        }
    }
}
