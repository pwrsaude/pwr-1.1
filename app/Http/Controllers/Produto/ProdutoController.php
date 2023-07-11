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
