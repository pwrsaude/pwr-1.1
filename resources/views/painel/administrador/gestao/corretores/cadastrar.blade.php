@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Cliente')

@section('content')
<!-- Ini: Content -->

<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Gestão de Corretores /</span>
        Novo Corretor
    </h4>
    <!-- Sticky Actions -->
    <div class="row">
        <div class="col-12">
            <div class="card">

                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <!-- 1. Delivery Address -->
                            <h5 class="mb-4">1. Informações Pessoais</h5>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label" for="fullname">Nome Completo</label>
                                    <input type="text" id="fullname" class="form-control" placeholder="John Doe" />
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label" for="phone">CPF</label>
                                    <input type="text" id="phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" />
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label" for="state">Sexo</label>
                                    <select id="state" class="select2 form-select" data-allow-clear="true">
                                        <option value="">Selecionar</option>
                                        <option value="">Feminino</option>
                                        <option value="">Masculino</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="email">Email</label>
                                    <div class="input-group input-group-merge">
                                        <input class="form-control" type="text" id="email" name="email" placeholder="john.doe" aria-label="john.doe" aria-describedby="email3" />
                                        <span class="input-group-text" id="email3">@example.com</span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label" for="alt-num">Número de Telefone</label>
                                    <input type="text" id="alt-num" class="form-control phone-mask" placeholder="658 799 8941" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="pincode">CEP</label>
                                    <input type="text" id="pincode" class="form-control" placeholder="658468" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="landmark">Cidade</label>
                                    <input type="text" id="landmark" class="form-control" placeholder="Nr. Wall Street" />
                                </div>
                                <div class="col-md">
                                    <label class="form-label" for="city">Bairro</label>
                                    <input type="text" id="city" class="form-control" placeholder="Jackson" />
                                </div>
                                <div class="col-md">
                                    <label class="form-label" for="state">Estado</label>
                                    <select id="state" class="select2 form-select" data-allow-clear="true">
                                        <option value="">Selecionar</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="address">Complemento</label>
                                    <textarea name="address" class="form-control" id="address" rows="2" placeholder="1456, Mall Road"></textarea>
                                </div>

                            </div>
                            <hr />
                            <button class="btn btn-primary d-grid w-100">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Sticky Actions -->
</div>

<!-- / End: Content -->
@endsection