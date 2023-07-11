<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Painel\Admin\PainelController;
use App\Http\Controllers\Users\OnboardController;

/** ROTAS APENAS PARA CRIAR O FRONT END */

Route::prefix('/')->group(function () {
    Route::get('/', [AuthController::class, 'pageLogin'])->name('login.index');
    Route::post('/', [AuthController::class, 'login'])->name('login.post');
    Route::get('/logout', [AuthController::class, 'logout'])->name('login.logout');
    Route::get('/registrar', [AuthController::class, 'pageRegistrar'])->name('page.registrar');
});

Route::get('/recuperar', function () {
    return view('auth.recuperar');
});
/**
 * rota checkout
 */
Route::prefix('/onboarding')->group(function(){
    Route::get('/search', [OnboardController::class, 'pageVerificarCpfOnboard'])->name('onboarding.search.pageVerificarCpfOnboard');
    Route::post('/search', [OnboardController::class, 'pageFinalizarOnboard'])->name('onboarding.seach.pageFinalizarOnboard');
});
// Route::get('/finalizar', function () {
//     return view('checkout.finalizar');
// });

Route::prefix('/cliente')->name('cliente.')->group(function () {
});

Route::prefix('/painel')->name('painel.')->group(function () {

    Route::get('/home', function () {
        return view('painel.usuario.index')->name('dashboard.user');
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
    })->middleware('auth');
    /**
     * rotas admnistrador
     */
    Route::prefix('/admin')->name('admin.')->group(function () {

        Route::get('/dashboard', [PainelController::class, "dashboard"])->name('dashboard');

        Route::get('/gestao-financeira', [PainelController::class, "gestaoFinanceira"])->name('gestao-financeira');

        Route::prefix('/gestao')->name('gestao.')->group(function () {
            Route::get('/clientes', [PainelController::class, "gestaoClientes"])->name('gestao-clientes');

            Route::get('/cliente', function () {
                return view('painel.administrador.gestao.clientes.informacoes');
            });
            Route::get('/administradores', [PainelController::class, "gestaoAdministradores"])->name('gestao-admins');

            Route::get('/gratuidades', [PainelController::class, "gestaoGratuidades"])->name('gestao-gratuidades');

            Route::get('/corretores', [PainelController::class, "gestaoCorretores"])->name('gestao-corretores');

            Route::get('/gratuidade/cadastrar', function () {
                return view('painel.administrador.gestao.gratuidades.cadastrar');
            });
            Route::get('/corretor/cadastrar', function () {
                return view('painel.administrador.gestao.corretores.cadastrar');
            });
            Route::get('/administrador/cadastrar', function () {
                return view('painel.administrador.gestao.administradores.cadastrar');
            });
        });
        Route::get('/exportacoes', function () {
            return view('painel.administrador.exportacoes');
        });
        Route::get('/gestao-produtos', [PainelController::class, "gestaoProdutos"])->name('gestao-produtos');
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
        Route::get('/virarcliente', function () {
            return view('painel.corretor.virarcliente');
        });
        Route::get('/configuracoes', function () {
            return view('painel.administrador.gestao.corretores.index');
        });
    });
});
