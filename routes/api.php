<?php

use App\Http\Controllers\Stripe\StripeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/pagamento')->name('pagamento.')->group(function () {

    // Route::post('/webhook', [PagamentoController::class, 'webhook'])->name('webhook');
    Route::post('/webhook', [StripeController::class, 'webhook'])->name('webhook');
    Route::get('/index/{position}', [StripeController::class, 'index'])->name('index');

});
