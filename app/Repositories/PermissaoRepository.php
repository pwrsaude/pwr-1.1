<?php

namespace App\Repositories;

use App\Http\Controllers\Users\UserController;
use App\Models\Permissao;
use App\Models\UserPermissao;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PermissaoRepository
{

    private $modelPermissao;
    private $modelUserPermissao;
    private $userController;

    public function __construct()
    {
        $this->modelPermissao = new Permissao();
        $this->modelUserPermissao = new UserPermissao();
        $this->userController = new UserController;
    }


    public function criar($data)
    {
        $force = $data['force'];

        $data['code'] = Str::ascii(Str::snake(mb_strtolower($data['name'])));

        $data = [
            'permissao_pai' => $data['permissao_pai'],
            'name' => $data['name'],
            'code' => $data['code'],
            'description' => $data['description'],
            'restrict' => $data['restrict'],
            'access_level' => $data['access_level']
        ];



        $permissao = $this->modelPermissao->query()->create($data);

        if($data['restrict'] && !$force)
        {
            $user = $this->userController->getUser(Auth::user()->id);
            $user->Permissoes()->attach($permissao->id);
        }

        return $permissao;
    }

    public function verificarAccessLevel($data)
    {
        if($user = $this->userController->getUser($data['user_id']))
        {
            $permissoes = $this->modelPermissao->query();

            if($permissoes->where('access_level', $user->access_level))
            {
                return $permissoes;
            }
        }
    }

}
