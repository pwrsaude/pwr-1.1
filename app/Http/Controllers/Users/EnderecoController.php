<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Repositories\EnderecoRepository;
use Exception;
use Illuminate\Http\Request;

class EnderecoController extends Controller
{
    private $enderecoRepository;

    public function __construct()
    {
        $this->enderecoRepository = $this->getEnderecoRepository();
    }

    private function getEnderecoRepository()
    {
        return new EnderecoRepository;
    }

    public function criar(
        int $user_id,
        int $cep,
        string $logradouro,
        int $numero,
        string $cidade,
        string $bairro,
        ?string $complemento = null,
        string $uf,
        ?string $pais = null)
    {
        try {
            $data = [
                'user_id' => $user_id,
                'cep' => $cep,
                'pais' => $pais = null ? 'br' : $pais,
                'logradouro' => $logradouro,
                'numero' => $numero,
                'cidade' => $cidade,
                'bairro' => $bairro,
                'complemento' => $complemento = null ? null : $complemento,
                'uf' => $uf
            ];

            if(!empty($data))
            {
                if($endereco = $this->enderecoRepository->newEndereco($data))
                {
                    return $endereco;
                }
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  cadastrar o endereço: {$th->getMessage()}",
                500
            );
        }
    }
}
