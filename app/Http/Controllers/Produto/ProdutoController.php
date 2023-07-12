<?php

namespace App\Http\Controllers\Produto;

use App\Http\Controllers\Controller;
use App\Repositories\ProdutoRepository;
use Exception;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    private $produtoRepository;

    public function __construct()
    {
        $this->produtoRepository = new ProdutoRepository;
    }

    public function storeTipoProduto($type)
    {
        try {

            $data = ['type' => $type];

            if(!empty($data))
            {
                $tipoProduto = $this->produtoRepository->storeTipoProduto($data);
            }
            return $tipoProduto;

        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }

    public function storeProduto($name, $description, $stripe_prod, $stripe_price = null, $tipo_produto_id)
    {
        try{
            $data = [
                'name' => $name,
                'description' => $description,
                'stripe_prod' => $stripe_prod,
                'stripe_price' => $stripe_price,
                'tipo_produto_id' => $tipo_produto_id
            ];

            if(!empty($data))
            {
                $produto = $this->produtoRepository->storeProduto($data);
                return $produto;
            }
        }catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }

    public function getProduto($stripe_prod = null, $stripe_price = null)
    {
        try {
            if (!is_null($stripe_price)) {
                $data = ['stripe_price' => $stripe_price];
            }

            if (!is_null($stripe_prod)) {
                $data = ['stripe_prod' => $stripe_prod];
            }

            $produto = $this->produtoRepository->getProduto($data);

            return $produto;

        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }
}
