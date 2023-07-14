<?php

namespace App\Http\Controllers\Assinatura;

use App\Http\Controllers\Controller;
use App\Repositories\AssinaturaRepository;
use Exception;
use Illuminate\Http\Request;

class AssinaturaController extends Controller
{
    private $assinaturaRepository;

    public function __construct()
    {
        $this->assinaturaRepository = new AssinaturaRepository;
    }

    public function store($user_id, $cliente_id, $stripe_prod, $stripe_price, $stripe_id, $tipo_produto_id, $status, $subscription_id)
    {
        try {
            $data = [
                'user_id' => $user_id,
                'cliente_id' => $cliente_id,
                'stripe_prod' => $stripe_prod,
                'stripe_price' => $stripe_price,
                'stripe_id' => $stripe_id,
                'tipo_produto_id' => $tipo_produto_id,
                'subscription_id' => $subscription_id,
                'status' => $status
            ];

            if(!empty($data))
            {
                $controleAssinatura = $this->assinaturaRepository->storeControleAssinatura($data);
                return $controleAssinatura;
            }


        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  gerar um controle de assinatura para o cliente_id = {$cliente_id}: {$th->getMessage()}",
                500
            );
        }
    }

    public function storeTableSubscriptions($user_id, $name, $stripe_id, $stripe_status, $quantity)
    {
        try {
            $data = [
                'user_id' => $user_id,
                'name' => $name,
                'stripe_id' => $stripe_id,
                'stripe_status' => $stripe_status,
                'quantity' => $quantity
            ];

            if(!empty($data))
            {
                $assinatura = $this->assinaturaRepository->storeTableSubscriptions($data);
                return $assinatura;
            }


        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  gerar um registro assinatura: {$th->getMessage()}",
                500
            );
        }
    }
}
