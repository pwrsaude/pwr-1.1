<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repositories\PermissaoRepository;
use Exception;
use Illuminate\Http\Request;

class PermissaoController extends Controller
{
    private $permissaoRepository;

    public function __construct()
    {
        $this->permissaoRepository = new PermissaoRepository;
    }
    public function criar(string $name, string $description, ?int $permissao_pai = null, bool $restrict = false, bool $force = false)
    {
        try {

            $data = [
                'name' => $name,
                'description' => $description,
                'permissao_pai' => $permissao_pai,
                'restrict' => $restrict,
                'force' => $force
            ];

            if (!empty($data))
            {
                if ($permissao = $this->permissaoRepository->criar($data))
                {
                    return $permissao;
                }
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível criar a permissão: {$th->getMessage()}",
                500
            );
        }
    }
}
