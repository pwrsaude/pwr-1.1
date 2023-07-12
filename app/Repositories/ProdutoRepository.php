<?php

namespace App\Repositories;

use App\Models\Produto;
use App\Models\TipoProduto;
use Exception;

class ProdutoRepository
{
    private $modelProduto;
    private $modelTipoProduto;

    public function __construct()
    {
        $this->modelProduto = new Produto();
        $this->modelTipoProduto = new TipoProduto();
    }

    public function getProduto($data)
    {
        if (!empty($data)) {
            $produto = $this->modelProduto->query();

            if (isset($data['stripe_prod'])) {
                $produto->where('stripe_prod', $data['stripe_prod']);
            }

            if (isset($data['stripe_price'])) {
                $produto->where('stripe_price', $data['stripe_price']);
            }

            return $produto->get();
        }
    }

    public function storeTipoProduto($data)
    {
        if (isset($data['type'])) {
            $type = $this->modelTipoProduto->query();
            if ($type->create($data)) {
                return $type;
            }
        }
    }

    public function storeProduto($data)
    {
        if (!empty($data)) {
            try {
                $type = $this->modelTipoProduto->query()->where('id', $data['tipo_produto_id'])->get();
            } catch (\Throwable $th) {


                throw new Exception(
                    "Tipo de produto não encontrado,
                    verifique novamente ou faça o cadastro do tipo do produto
                    {$th->getMessage()}",
                    500
                );
            }

            $data['tipo_produto_id'] = $type[0]->id;

            $produto = $this->modelProduto->query();
            if ($produto->create($data)) {
                return $produto;
            }
        }
    }
}
