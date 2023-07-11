<?php

namespace App\Repositories;

use App\Models\Produto;

class ProdutoRepository
{
    private $modelProduto;

    public function __construct()
    {
        $this->modelProduto = new Produto();
    }

    public function getProduto($data)
    {
        if(!empty($data))
        {
            $produto = $this->modelProduto->query();

            if(isset($data['stripe_prod']))
            {
                $produto->where('stripe_prod', $data['stripe_prod']);
            }

            if(isset($data['stripe_price']))
            {
                $produto->where('stripe_price', $data['stripe_price']);
            }

            return $produto->get();
        }
    }
}
