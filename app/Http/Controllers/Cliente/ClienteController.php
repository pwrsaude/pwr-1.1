<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Repositories\ClienteRepository;
use DateTime;
use Exception;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    private $clienteRepository;

    public function __construct()
    {
        $this->clienteRepository = $this->getClienteRepository();
    }

    private function getClienteRepository()
    {
        return new ClienteRepository;
    }

    public function criar(int $user_id, string $cpfCnpj, DateTime $dataNascimento, string $sexo)
    {
        try {

            $data = [
                'user_id' => $user_id,
                'cpf_cnpj' => $cpfCnpj,
                'data_nascimento' => $dataNascimento,
                'sexo' => $sexo
            ];

            if(!empty($data))
            {
                $cliente = $this->clienteRepository->newCliente($data);

                return $cliente;
            }

        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível criar um cliente: {$th->getMessage()}",
                500
            );
        }
    }
}
