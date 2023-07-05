<?php

namespace App\Http\Controllers\Painel\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PainelController extends Controller
{
    //Get dashboard admin
    public function dashboard()
    {
        return view('painel.administrador.dashboard');
    }
    // Get page gestão de clientes
    public function gestaoClientes()
    {
        return view('painel.administrador.gestao.clientes.index');
    }
    // Get page gestão de admins
    public function gestaoAdministradores()
    {
        return view('painel.administrador.gestao.administradores.index');
    }
    //Get page gestão de gratuidades
    public function gestaoGratuidades()
    {
        return view('painel.administrador.gestao.gratuidades.index');
    }
    //Get page gestão de corretoes
    public function gestaoCorretores()
    {
        return view('painel.administrador.gestao.corretores.index');
    }
    //Get gestõa financeira
    public function gestaoFinanceira()
    {
        return view('painel.administrador.gestao.financeira.index');
    }

    public function registrarCorretorAdmIndexView()
    {
        return view('Usuario.Administrador.Registrar.Corretor.index');
    }
}
