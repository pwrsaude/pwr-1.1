<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    private Auth $auth;

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
        $login = $request->login;
        $password = $request->password;
    }
}
