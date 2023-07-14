<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Produto\ProdutoController;
use App\Http\Requests\OnboardingFinalStore;
use App\Models\Produto;
use App\Repositories\OnboardRepository;
use Exception;
use Illuminate\Http\Request;
use Validator;

class OnboardController extends Controller
{
    private $onboardRepository;
    private $produtoController;

    public function __construct()
    {
        $this->onboardRepository = $this->getOnboardRepository();
        $this->produtoController = new ProdutoController;
    }

    public function pageVerificarCpfOnboard()
    {
        return view('checkout.index');
    }

    private function getOnboardRepository()
    {
        return new OnboardRepository;
    }
    //requer refatoração: Repository patterns
    public function pageRedirecionarOnboard(Request $request)
    {
        if ($onboard = $this->onboardRepository->getOnboards($data = ['cpf_cnpj' => $request->cpf])) {
            return redirect()->route('onboarding.search.pageFinalizarOnboard', [
                'id' => $onboard[0]->id
            ]);
        }
    }

    public function pageFinalizarOnboard($onboard_id)
    {
        if ($onboard = $this->onboardRepository->getOnboards($data['id'] = $onboard_id)) {
            foreach ($onboard as $value) {
                $data = [
                    'cpf_cliente' => $value->cpf_cliente,
                    'email' => $value->email,
                    'quantity' => $value->quantity,
                    'telefone' => $value->telefone,
                    'client_identify' => $value->stripe_id
                ];

                $produto = $this->produtoController->getProduto($value->stripe_prod, null);

                foreach ($produto as $key) {
                    $produto = [
                        'name' => $key->name,
                        'description' => $key->description,

                    ];
                }
            }

            return view('checkout.finalizar', [
                'onboard' => $data,
                'produto' => $produto
            ]);
        }

        return redirect()->route('onboarding.search.pageVerificarCpfOnboard');
    }

    //refatorar
    public function criarCliente(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['email','required'],
            'cpf_cnpj' => ['required'],
            'sexo' => ['required'],
            'data_nascimento' => ['date','required'],
            'telefone' => ['required'],
            'senha' => ['required','min:8'],
            'cep' => ['required'],
            'uf' => ['required'],
            'cidade' => ['required'],
            'bairro' => ['required'],
            'rua' => ['required'],
            'numero' => ['required'],
            'client_identify' => ['required']
        ],
        [
            'name' => 'Informe o seu nome.',
            'cpf' => 'Informe seu CPF.',
            'email' => 'Informe um email válido.',
            'senha' => 'Informe uma senha com no mínimo 8 dígitos!.',
            'telefone' => 'Informe um número de telefone válido.',
            'data_nascimento' => 'Informe sua data de nascimento.',
            'sexo' => 'Informe seu gênero!',
            'numero' => 'Informe o número do seu endereço.',
            'rua' => 'Informe o logradouro.',
            'bairro' => 'Informe o bairro de acordo com o logradouro.',
            'cidade' => 'Informe a cidade que está localizado.',
            'uf' => 'Informe o estado em que reside atualmente.',
            'cep' => 'Informe um CEP válido!'
        ]);
        try {
            if (!empty($data)) {
                $cliente = $this->onboardRepository->criarCliente($data);
                dd('to aqui');
                return redirect()->route('login.index', ['check_onboard' => 'Cadastro realizado com sucesso!']);
            }
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }


    public function getOnboards($emailCorretor = null, $id = null, $cpf_cnpj = null)
    {
        try {
            $data = [];
            if (!is_null($emailCorretor)) {
                $data = [
                    'email_corretor' => $emailCorretor
                ];
            }

            if (!is_null($id)) {
                $data = [
                    'email_corretor' => $id
                ];
            }

            if (!is_null($cpf_cnpj)) {
                $data = [
                    'cpf_cnpj' => $cpf_cnpj
                ];
            }

            return $this->onboardRepository->getOnboards($data);
        } catch (\Throwable $th) {


            throw new Exception(
                "Não foi possível  realizar essa ação: {$th->getMessage()}",
                500
            );
        }
    }

    public function finalizarOnboard($id)
    {
        try {

            $data = [
                'id' => $id
            ];

            if (!empty($data)) {
                $this->onboardRepository->finishOnboard($data);
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível finalizar o cadastro onboard: {$th->getMessage()}",
                500
            );
        }
    }

    public function store(
        $email,
        $stripe_id,
        $subscription,
        $cpf_cliente,
        $quantity,
        $stripe_price,
        $stripe_prod,
        $telefone,
        $codigo_pagamento,
        $email_corretor,
        $uuid
    ) {
        try {

            $data = [
                'email' => $email,
                'stripe_id' => $stripe_id,
                'subscription' => $subscription,
                'cpf_cliente' => $cpf_cliente,
                'quantity' => $quantity,
                'stripe_price' => $stripe_price,
                'stripe_prod' => $stripe_prod,
                'telefone' => $telefone,
                'codigo_pagamento' => $codigo_pagamento,
                'email_corretor' => $email_corretor,
                'uuid' => $uuid
            ];

            if (!empty($data)) {
                $this->onboardRepository->store($data);
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gerar o onboard: {$th->getMessage()}",
                500
            );
        }
    }

    public function setPriceOnboard($stripe_id, $stripe_price, $stripe_prod)
    {
        try {

            $data = [
                'stripe_id' => $stripe_id,
                'stripe_price' => $stripe_price,
                'stripe_prod' => $stripe_prod
            ];
            if (!empty($data)) {
                $this->onboardRepository->setPriceOnboard($data);
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o stripe_price: {$th->getMessage()}",
                500
            );
        }
    }

    public function setQuantityPlan($stripe_id, $quantity)
    {
        try {

            $data = [
                'stripe_id' => $stripe_id,
                'quantity' => $quantity,
            ];
            if (!empty($data)) {
                $this->onboardRepository->setQuantity($data);
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o stripe_price: {$th->getMessage()}",
                500
            );
        }
    }
}
