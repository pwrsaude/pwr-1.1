<?php

use Illuminate\Support\Facades\Route;

/** ROTAS APENAS PARA CRIAR O FRONT END */

/**
 * rota checkout
 */
Route::get('/checkout', function () {
    return view('checkout.home');
});

Route::prefix('/painel')->group(function () {

    /**
     * Rotas Usuário/Cliente
     */
    Route::get('/home', function () {
        return view('painel.usuario.index');
    });
    Route::get('/perfil-conta', function () {
        return view('painel.usuario.perfil.conta');
    });
    Route::get('/perfil-seguranca', function () {
        return view('painel.usuario.perfil.assinatura');
    });
    Route::get('/perfil-notificacoes', function () {
        return view('painel.usuario.perfil.assinatura');
    });
    Route::get('/perfil-assinatura', function () {
        return view('painel.usuario.perfil.assinatura');
    });
    Route::get('/perfil-dependentes', function () {
        return view('painel.usuario.dependentes.show');
    });
    /**
     * rotas admnistrador
     */
    Route::prefix('/admin')->group(function () {

        Route::get('/dashboard', function () {
            return view('painel.administrador.dashboard');
        });
        Route::get('/gestao-clientes', function () {
            return view('painel.administrador.gestao.clientes.index');
        });
        Route::get('/gestao-administradores', function () {
            return view('painel.administrador.gestao.administradores.index');
        });
        Route::get('/gestao-corretores', function () {
            return view('painel.administrador.gestao.corretores.index');
        });
        Route::get('/gestao-gratuidades', function () {
            return view('painel.administrador.gestao.gratuidades.index');
        });
        Route::get('/gestao-financeira', function () {
            return view('painel.administrador.gestao.financeira.index');
        });
        Route::get('/exportacoes', function () {
            return view('painel.administrador.exportacoes');
        });
    });
    /**
     * rotas corrretor
     */
    Route::prefix('/corretor')->group(function () {
        Route::get('/dashboard', function () {
            return view('painel.corretor.dashboard');
        });
        Route::get('/vendas', function () {
            return view('painel.corretor.gestao.vendas');
        });
        Route::get('/clientes', function () {
            return view('painel.corretor.gestao.clientes');
        });
        Route::get('/configuracoes', function () {
            return view('painel.administrador.gestao.corretores.index');
        });
    });
});
