<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Painel\Admin\PainelController;

/** ROTAS APENAS PARA CRIAR O FRONT END */



Route::get('/', function () {
    return view('auth.login');
});

Route::prefix('/')->group(function(){
    Route::get('/', [AuthController::class, 'pageLogin'])->name('page.login');
    Route::get('/registrar', [AuthController::class, 'pageRegistrar'])->name('page.registrar');
});

Route::get('/recuperar', function () {
    return view('auth.recuperar');
});
/**
 * rota checkout
 */
Route::get('/checkout', function () {
    return view('checkout.home');
});

Route::prefix('/painel')->name('painel.')->group(function () {

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
    Route::prefix('/admin')->name('admin.')->group(function () {

        Route::get('/dashboard', [PainelController::class, "dashboard"])->name('dashboard');

        Route::get('/gestao-financeira', [PainelController::class, "gestaoFinanceira"])->name('gestao-financeira');

        Route::prefix('/gestao')->name('gestao.')->group(function () {
            Route::get('/clientes', [PainelController::class, "gestaoClientes"])->name('gestao-clientes');
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
