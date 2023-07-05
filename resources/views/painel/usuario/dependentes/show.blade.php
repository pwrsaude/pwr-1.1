@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Cliente')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Configurações de Conta /</span> Dependentes & Associados
    </h4>

    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
                <li class="nav-item"><a class="nav-link" href="{{url('painel/perfil-conta')}}"><i class="bx bx-user me-1"></i> Minha Conta</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('pages/account-settings-security')}}"><i class="bx bx-lock-alt me-1"></i> Segurança</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('painel/perfil-assinatura')}}"><i class="bx bx-detail me-1"></i> Planos e Assinatura</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('pages/account-settings-notifications')}}"><i class="bx bx-bell me-1"></i> Notificações</a></li>
                <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class="bx bx-group me-1"></i> Dependentes & Associados</a></li>
            </ul>

            <div class="row g-4">
                <div class="col-md-12">
                    <div class="card h-100">
                        <div class="row h-100">
                            <div class="col-sm-4">
                                <div class="d-flex align-items-end h-100 justify-content-center mt-sm-0 mt-3">
                                    <img src="../../assets/img/illustrations/page-misc-error-light.png" class="img-fluid" alt="Image" width="120" data-app-light-img="illustrations/sitting-girl-with-laptop-light.png" data-app-dark-img="illustrations/sitting-girl-with-laptop-dark.png" />
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card-body text-sm-end text-center ps-sm-0">
                                    <button data-bs-target="#addRoleModal" data-bs-toggle="modal" class="btn btn-primary mb-3 text-nowrap add-new-role">
                                        Adicionar Novo Dependente
                                    </button>
                                    <p class="mb-0">Sua assinatura permite adicionar no máximo 3 Dependentes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mx-auto mb-3">
                                <img src="../../assets/img/avatars/3.png" alt="Avatar Image" class="rounded-circle w-px-100" />
                            </div>
                            <h5 class="mb-1 card-title">Mark Gilbert</h5>
                            <small>CPF: 123.456.789-32</small>
                            <div class="d-flex align-items-center justify-content-around my-4 py-2">
                                <div>
                                    <h6 class="mb-1">Data de Nascimento</h6>
                                    <span>24/03/1999</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Sexo</h6>
                                    <span>Masculino</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Adicionado em</h6>
                                    <span>24/06/2023</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i class="bx bx-user-x me-1"></i>Excluir</a>
                                <a href="javascript:;" class="btn btn-label-secondary"><i class="bx bx-edit-alt"></i>Editar Informações</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mx-auto mb-3">
                                <img src="../../assets/img/avatars/12.png" alt="Avatar Image" class="rounded-circle w-px-100" />
                            </div>
                            <h5 class="mb-1 card-title">Eugenia Parsons</h5>
                            <small>CPF: 123.456.789-32</small>
                            <div class="d-flex align-items-center justify-content-around my-4 py-2">
                                <div>
                                    <h6 class="mb-1">Data de Nascimento</h6>
                                    <span>24/03/1999</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Sexo</h6>
                                    <span>Feminino</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Adicionado em</h6>
                                    <span>24/06/2023</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i class="bx bx-user-x me-1"></i>Excluir</a>
                                <a href="javascript:;" class="btn btn-label-secondary"><i class="bx bx-edit-alt"></i>Editar Informações</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card">
                        <div class="card-body text-center">

                            <div class="mx-auto mb-3">
                                <img src="../../assets/img/avatars/5.png" alt="Avatar Image" class="rounded-circle w-px-100" />
                            </div>
                            <h5 class="mb-1 card-title">Francis Byrd</h5>
                            <small>CPF: 123.456.789-32</small>
                            <div class="d-flex align-items-center justify-content-around my-4 py-2">
                                <div>
                                    <h6 class="mb-1">Data de Nascimento</h6>
                                    <span>24/03/1999</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Sexo</h6>
                                    <span>Masculino</span>
                                </div>
                                <div>
                                    <h6 class="mb-1">Adicionado em</h6>
                                    <span>24/06/2023</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i class="bx bx-user-x me-1"></i>Excluir</a>
                                <a href="javascript:;" class="btn btn-label-secondary"><i class="bx bx-edit-alt"></i>Editar Informações</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- / End: Content -->
@endsection