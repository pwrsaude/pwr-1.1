@extends('layouts/main')
@section('title', 'PwrSaúde - Editar Gratuidade')

@section('content')
<!-- Ini: Content -->

<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Gestão de Gratuidades /</span>
        Editar Gratuidade
    </h4>
    <!-- Sticky Actions -->
    <div class="row">
        <div class="col-12">
            <div class="card">

                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <!-- 1. informações de cadastro -->
                            <h5 class="mb-4">1. Informações Pessoais</h5>
                            <form method="post" class="needs-validation" novalidate>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label" for="nomeCompleto">Nome Completo</label>
                                        <input type="text" id="nomeCompleto" class="form-control" name="nomeCompleto" required />
                                        <div class="invalid-feedback">Digite um nome válido.</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label" for="cpf">CPF</label>
                                        <input type="text" id="cpf" name="cpf" class="form-control" maxlength="14" minlength="11" placeholder="123.456.789-10" required />
                                        <div class="invalid-feedback">Digite um CPF válido.</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label" for="sexo">Sexo</label>
                                        <select id="sexo" name="sexo" class="select2 form-select" data-allow-clear="true" required>
                                            <option value="">Selecionar</option>
                                            <option value="">Feminino</option>
                                            <option value="">Masculino</option>
                                        </select>
                                        <div class="invalid-feedback">Selecione uma opção.</div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label" for="dataNascimento">Data de Nascimento</label>
                                        <input type="date" id="dataNascimento" name="dataNascimento" class="form-control" required />
                                        <div class="invalid-feedback">Informe uma data de nascimento válida.</div>
                                    </div>
                                    <div class="col-md-5">
                                        <label class="form-label" for="email">Email</label>
                                        <input class="form-control" type="text" id="email" name="email" placeholder="example@com.br" required />
                                        <div class="invalid-feedback">Digite um email válido.</div>
                                    </div>

                                    <div class="col-md-4">
                                        <label class="form-label" for="telefone">Número de Telefone</label>
                                        <div class="input-group">
                                            <span class="input-group-text">BR (+55)</span>
                                            <input type="text" id="telefone" name="telefone" type="text" class="form-control" placeholder="(11) 98765-4321" />
                                            <div class="invalid-feedback">Digite um número de telefone válido.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="cep">CEP</label>
                                        <input type="text" id="cep" class="form-control" name="cep" placeholder="72318-552" minlength="8" required />
                                        <div class="invalid-feedback">Digite um CEP válido.</div>
                                        <small id="invalid-cep" style="color: red;"></small>

                                    </div>
                                    <div class="col-md">
                                        <label class="form-label" for="estado">Estado</label>
                                        <select id="estado" class="select2 form-select" name="uf" data-allow-clear="true">
                                            <option value="">Selecione</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espirito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="cidade">Cidade</label>
                                        <input type="text" id="cidade" class="form-control" name="cidade" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="bairro">Bairro</label>
                                        <input type="text" id="bairro" class="form-control" name="bairro" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="rua">Rua</label>
                                        <input type="text" id="rua" class="form-control" name="rua" />
                                    </div>
                                    <div class="col-md">
                                        <label class="form-label" for="numero">Número</label>
                                        <input type="number" id="numero" class="form-control" name="numero" placeholder="(Opcional)" />
                                    </div>


                                </div>
                                <!-- 2. Tipo de Gratuidade -->
                                <h5 class="my-4">2. Tipo de Gratuidade</h5>
                                <div class="row gy-3">
                                    <div class="col-md">
                                        <div class="form-check custom-option custom-option-icon">
                                            <label class="form-check-label custom-option-content" for="customRadioIcon1">
                                                <span class="custom-option-body">
                                                    <i class="bx bx-briefcase-alt-2"></i>
                                                    <span class="custom-option-title"> Funcionario </span>
                                                    <small> Não tem tempo de expiração. </small>
                                                </span>
                                                <input name="tipoGratuidade" class="form-check-input" type="radio" value="funcionario" />
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md">
                                        <div class="form-check custom-option custom-option-icon">
                                            <label class="form-check-label custom-option-content" for="customRadioIcon2">
                                                <span class="custom-option-body">
                                                    <i class="bx bx-paper-plane"></i>
                                                    <span class="custom-option-title"> Cortesia </span>
                                                    <input class="form-control form-control-sm" type="date" name="fimGratuidade" />
                                                </span>
                                                <input class="form-check-input" type="radio" value="" name="tipoGratuidade" value="gratuidade" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <p id="demo"></p>
                                <button type="submit" class="btn btn-primary w-30">Salvar</button>
                                <button type="reset" class="btn btn-danger w-30">Cancelar</button>
                            </form>
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
@section('pageScript')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script>
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {
        reverse: true
    });
    $('#dataNascimento').mask('00/00/0000');
</script>
<script src="{{asset('assets/js/form-validation.js')}}"></script>
<script src="{{asset('assets/js/forms-extras.js')}}"></script>
<script src="{{asset('assets/js/cep.js')}}"></script>
@endsection