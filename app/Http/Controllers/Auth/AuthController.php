<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\Contato;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    private Auth $auth;
    private Cliente $modelCliente;
    private User $modelUser;
    private Contato $modelContato;
    private Hash $hash;


    public function pageLogin()
    {
        return view('auth.login');
    }

    public function pageRegistrar()
    {
        return view('auth.registrar');
    }

    public function login(Request $request)
    {

        $login = $request->input('login');
        $password = $request->input('password');

        try {

            // Procura pelo CPF ou CNPJ
            $user = $this->modelUser->query()->where('cpf_cnpj', $login)->first();

            // Se nao achar, procura pela carteirinha
            if (is_null($user))
            {

                $cliente = $this->modelCliente->query()->where('carteirinha', $login)->first();

                if (!is_null($cliente))
                {

                    $user = $this->modelUser->query()->where('id', $cliente->user_id)->first();

                } else {

                    $contato = $this->modelContato->query()->where('email', $login)->first();

                    if (is_null($contato)) return $this->retornoUsuarioOuSenhaInvalidos();

                    $user = User::query()->where('id', $contato->user_id)->first();
                }
            }

            // Checa a senha
            if (!$this->hash->check($password, $user->password))
            return $this->retornoUsuarioOuSenhaInvalidos();

            // Autoriza usuario
            $this->auth->login($user, true);

            // Regenera a sessão
            $request->session()->regenerate();

            return response()->json([
                'code' => 200,
                'data' => [
                    'msg' => 'Login bem sucedido',
                    'usuario' => $user
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 500,
                'erro' => [
                    'msg' => $th->getMessage(),
                    'linha' => $th->getLine(),
                    'arquivo' => $th->getFile(),
                    'trace' => $th->getTrace()
                ]
            ], 500);
        }
    }
}
