<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Repositories\ContatoRepository;
use Exception;
use Illuminate\Http\Request;

class ContatoController extends Controller
{
    private $contatoRepository;

    public function __construct()
    {
        $this->contatoRepository = $this->getContatoRepository();
    }

    private function getContatoRepository()
    {
        return new ContatoRepository;
    }

    public function criar(
        int $user_id,
        string $email,
        int $telefone_1,
        ?int $telefone_2 = null,
        ?int $telefone_3 = null
    )
    {
        try {
            $data = [
                'user_id' => $user_id,
                'email' => $email,
                'telefone_1' => $telefone_1,
                'telefone_2' => $telefone_2,
                'telefone_3' => $telefone_3
            ];

            if(!empty($data))
            {
                if($contato = $this->contatoRepository->newContato($data))
                {
                    return $contato;
                }
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  cadastrar os dados de contato: {$th->getMessage()}",
                500
            );
        }
    }
}
