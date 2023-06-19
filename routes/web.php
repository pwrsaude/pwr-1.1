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
    });
    /**
     * rotas corrretor
     */
    Route::prefix('/corretor')->group(function () {
        Route::get('/dashboard', function () {
            return view('painel.corretor.dashboard');
        });
        Route::get('/vendas', function () {
            return view('painel.administrador.gestao.clientes.index');
        });
        Route::get('/clientes', function () {
            return view('painel.corretor.gestao.clientes');
        });
        Route::get('/configuracoes', function () {
            return view('painel.administrador.gestao.corretores.index');
        });
    });
});
