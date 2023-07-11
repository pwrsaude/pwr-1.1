<?php

namespace App\Repositories;

use App\Models\Cliente;
use App\Models\Contato;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthRepository
{

    private Auth $auth;
    private Cliente $modelCliente;
    private User $modelUser;
    private Contato $modelContato;
    private Hash $hash;

    public function auth(Request $request)
    {
        $request->validate(
            [
                'login' => ['required'],
                'password' => ['required']
            ],
            [
                'login.required' => 'Informe um email, cpf ou carteirinha válido',
                'password.required' => 'Informe sua senha'
            ]
        );



        if (!Auth::attempt(['email' => $request->login, 'password' => $request->password]))
        {
            if (!Auth::attempt(['cpf_cnpj' => $request->login, 'password' => $request->password]))
            {
                return false;
            }
        }

        return true;
    }

    public function verificarSenha($data, $user)
    {
        if (!$this->hash->check($data['password'], $user)) {
            return $this->retornoUsuarioOuSenhaInvalidos();
        }

        return true;
    }

    private function retornoUsuarioOuSenhaInvalidos()
    {
        return response()->json([
            'code' => 400,
            'erro' => [
                'msg' => 'Usuário ou senha inválidos'
            ]
        ], 400);
    }
}
