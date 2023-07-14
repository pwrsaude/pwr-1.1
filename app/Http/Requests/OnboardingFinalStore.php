<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Validator;
class OnboardingFinalStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        $data = $this->validate([
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

        return $data;
    }
}
