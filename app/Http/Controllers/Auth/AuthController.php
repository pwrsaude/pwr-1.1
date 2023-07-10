<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\Contato;
use App\Models\User;
use App\Repositories\AuthRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // private Cliente $modelCliente;
    // private User $modelUser;
    // private Contato $modelContato;
    // private Hash $hash;
    private $authRepository;

    public function __construct()
    {
        $this->authRepository = $this->getRepository();
    }

    private function getRepository()
    {
        return new AuthRepository;
    }


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
        try {

            if (isset($request)) {
                if ($this->authRepository->auth($request)) {
                    $request->session()->regenerate();

                    return redirect()->route('painel.admin.dashboard');
                }

                return redirect()->back()->with('danger', 'Email ou senha inválido!');
            }
        } catch (Exception $e) {

            return $e->getMessage();
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login.index');
    }

}
