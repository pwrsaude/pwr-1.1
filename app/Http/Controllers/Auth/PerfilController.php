<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repositories\PerfilRepository;
use Exception;
use Illuminate\Http\Request;

class PerfilController extends Controller
{
    private $perfilRepository;

    public function __construct()
    {
        $this->perfilRepository = $this->getPerfilRepository();
    }

    private function getPerfilRepository()
    {
        return new PerfilRepository;
    }

    public function criar(string $name, string $description)
    {
        try {
            $data = [
                'name' => $name,
                'description' => $description
            ];

            if (!empty($data)) {
                $perfil = $this->perfilRepository->newPerfil($data);

                return $perfil;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  criar o perfil: {$th->getMessage()}",
                500
            );
        }
    }
    public function getPerfilByName(string $name)
    {
        try {
            $data = [
                'name' => $name
            ];

            if (!empty($data)) {
                $perfil = $this->perfilRepository->getPerfilByName($data);

                return $perfil;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  encontrar o perfil: {$th->getMessage()}",
                500
            );
        }
    }

    public function getPerfilById(int $id)
    {
        try {
            $data = [
                'id' => $id
            ];

            if (!empty($data)) {
                $perfil = $this->perfilRepository->getPerfilById($data);

                return $perfil;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  encontrar o perfil: {$th->getMessage()}",
                500
            );
        }
    }

    public function atribuirPerfil(string $pid, string $perfil_nome)
    {
        try {
            $data = [
                'pid' => $pid,
                'perfil_nome' => $perfil_nome
            ];

            if (!empty($data)) {
                $perfil = $this->perfilRepository->atribuirPerfil($data);

                return $perfil;
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  atribuir o perfil: {$th->getMessage()}",
                500
            );
        }
    }
}
