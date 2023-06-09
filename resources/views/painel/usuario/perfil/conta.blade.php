@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Cliente')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Configurações de Conta /</span> Planos e Assinatura
    </h4>

    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
                <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Minha Conta</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-lock-alt me-1"></i> Segurança</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('painel/perfil-assinatura')}}"><i class="bx bx-detail me-1"></i> Planos e Assinatura</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('pages/account-settings-notifications')}}"><i class="bx bx-bell me-1"></i> Notificações</a></li>
                <li class="nav-item"><a class="nav-link" href="javascript:void(0);"><i class="bx bx-group me-1"></i> Dependentes & Associados</a></li>
            </ul>
            <!-- Conteudo -->
            <div class="card mb-4">
                <h5 class="card-header">Detalhes da conta</h5>
                <!-- Account -->
                <div class="card-body">
                    <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img src="{{asset('assets/img/avatars/1.png')}}" alt="user-avatar" class="d-block rounded" height="100" width="100" id="uploadedAvatar" />
                        <div class="button-wrapper">
                            <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                <span class="d-none d-sm-block">Fazer upload de uma foto</span>
                                <i class="bx bx-upload d-block d-sm-none"></i>
                                <input type="file" id="upload" class="account-file-input" hidden accept="image/png, image/jpeg" />
                            </label>
                            <button type="button" class="btn btn-label-secondary account-image-reset mb-4">
                                <i class="bx bx-reset d-block d-sm-none"></i>
                                <span class="d-none d-sm-block">Remover foto</span>
                            </button>

                            <p class="text-muted mb-0">Fortmatos permitidos JPG, JPEG, GIF e PNG, tamanho maximo de 800K</p>
                        </div>
                    </div>
                </div>
                <hr class="my-0">
                <div class="card-body">
                    <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div class="row">
                            <div class="mb-3 col-md-6">
                                <label for="firstName" class="form-label">Nome Completo</label>
                                <input class="form-control" type="text" id="firstName" name="firstName" value="John" autofocus />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="firstName" class="form-label">CPF</label>
                                <input class="form-control" type="text" id="firstName" name="firstName" value="123.456.789-23" autofocus />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="firstName" class="form-label">Data de Nascimento</label>
                                <input class="form-control" type="date" id="firstName" name="firstName" autofocus />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label class="form-label" for="country">Sexo</label>
                                <select id="country" class="select2 form-select">
                                    <option value="F">Feminino</option>
                                    <option value="M">Masculino</option>
                                </select>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="email" class="form-label">E-mail</label>
                                <input class="form-control" type="text" id="email" name="email" value="john.doe@example.com" placeholder="john.doe@example.com" />
                            </div>

                            <div class="mb-3 col-md-6">
                                <label class="form-label" for="phoneNumber">Telefone 1</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">BR (+55)</span>
                                    <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" placeholder="202 555 0111" />
                                </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label class="form-label" for="phoneNumber">Telefone 2</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">BR (+55)</span>
                                    <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" placeholder="202 555 0111" />
                                </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="zipCode" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="zipCode" name="zipCode" placeholder="231465" maxlength="6" />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="address" class="form-label">Enderço</label>
                                <input type="text" class="form-control" id="address" name="address" placeholder="Address" />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="state" class="form-label">Estado</label>
                                <input class="form-control" type="text" id="state" name="state" placeholder="California" />
                            </div>

                            <div class="mb-3 col-md-6">
                                <label class="form-label" for="country">Cidade</label>
                                <select id="country" class="select2 form-select">
                                    <option value="">Select</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary me-2">Salvar Alterações</button>
                            <button type="reset" class="btn btn-label-secondary">Cancelar</button>
                        </div>
                    </form>
                </div>
                <!-- /Account -->
            </div>
            <div class="card">
                <h5 class="card-header">Desativar Conta</h5>
                <div class="card-body">
                    <div class="mb-3 col-12 mb-0">
                        <div class="alert alert-warning">
                            <h6 class="alert-heading fw-bold mb-1">Tem certeza de que deseja desativar sua conta?</h6>
                            <p class="mb-0">Desativando sua conta, todos dependentes dessa conta também serão desativados!</p>
                        </div>
                    </div>
                    <form id="formAccountDeactivation" onsubmit="return false">
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
                            <label class="form-check-label" for="accountActivation">Confirme para desativar sua conta.</label>
                        </div>
                        <button type="submit" class="btn btn-danger deactivate-account">Desativar Conta</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- / End: Content -->
@endsection