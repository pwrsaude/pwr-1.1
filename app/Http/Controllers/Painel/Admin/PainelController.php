<?php

namespace App\Http\Controllers\Painel\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PainelController extends Controller
{
    public function dashboard()
    {
        return view('painel.administrador.dashboard');
    }

    public function gestaoClientes()
    {
        return view('painel.administrador.gestao.clientes.index');
    }

    public function gestaoFinanceira()
    {
        return view('painel.administrador.gestao.financeira.index');
    }

    public function registrarCorretorAdmIndexView()
    {
        return view('Usuario.Administrador.Registrar.Corretor.index');
    }
}
