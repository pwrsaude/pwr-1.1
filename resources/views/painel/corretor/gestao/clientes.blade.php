@extends('layouts/main')
@section('title', 'PwrSaúde - Meus Clientes')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <!-- Ini: Layout Demo -->
    <div class="row">

        <!-- Ini: Receita total -->

        <!--/ End: Receita total -->
        <div class="card">

            <div class="card-body">
                <div class="card-header">
                    <button class="btn btn-primary" type="button" id="button-addon2">CRIAR PÁGINA DE CAPTURA</button>
                </div>
                <div class="card-title d-flex align-items-start justify-content-between">
                    <div class="avatar flex-shrink-0">
                        <img src="../../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                    </div>
                    <div class="dropdown">
                        <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                            <a class="dropdown-item" href="javascript:void(0);">View More</a>
                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                        </div>
                    </div>
                </div>
                <span class="d-block mb-1">Assinaturas</span>
                <h3 class="card-title text-nowrap mb-2">R$2.456,3</h3>
                <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
            </div>

            <div class="col-12 col-md-8 col-lg-12 order-3 order-md-2">
                <div class="row">
                    <div class="col-3 mb-4">
                        <div class="card">

                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img src="../../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                            <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <span class="d-block mb-1">Assinaturas</span>
                                <h3 class="card-title text-nowrap mb-2">R$2.456,3</h3>
                                <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img src="../../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                            <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <span class="d-block mb-1">Assinaturas</span>
                                <h3 class="card-title text-nowrap mb-2">R$2.456,3</h3>
                                <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img src="../../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                            <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <span class="d-block mb-1">Assinaturas</span>
                                <h3 class="card-title text-nowrap mb-2">R$2.456,3</h3>
                                <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-4">
                        <div class="card">
                            <div class="card-body pb-2">
                                <span class="d-block fw-semibold mb-1">Receita</span>
                                <h3 class="card-title mb-1">R$ 425k</h3>
                                <div id="revenueChart"></div>
                            </div>
                        </div>
                    </div>
                    <!-- </div>
                                    <div class="row"> -->
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                    <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                        <div class="card-title">
                                            <h5 class="text-nowrap mb-2">Venda de Corretores</h5>
                                            <span class="badge bg-label-warning rounded-pill">Ano 2023</span>
                                        </div>
                                        <div class="mt-sm-auto">
                                            <small class="text-success text-nowrap fw-semibold"><i class="bx bx-chevron-up"></i> 68.2%</small>
                                            <h3 class="mb-0">R$9.686,00</h3>
                                        </div>
                                    </div>
                                    <div id="profileReportChart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h4>Cliente</h4>
                    <button class="btn btn-primary" type="button" id="button-addon2">CRIAR PÁGINA DE CAPTURA</button>
                </div>
            </div>
            <div class="card-body demo-vertical-spacing demo-only-element">
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Link</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">

                            <tr>
                                <td>Link 2</td>
                                <td><a href="javascript:void(0);">app.pwrsaude.com.br/assinar?invite=57HGF745</a></td>
                                <td>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-trash me-2"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Link 3</td>
                                <td><a href="javascript:void(0);">app.pwrsaude.com.br/assinar?invite=57HGF7 45</a></td>
                                <td>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-trash me-2"></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>Link 4</td>
                                <td><a href="javascript:void(0);">app.pwrsaude.com.br/assinar?invite=57HGF745</a></td>
                                <td>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i></a>
                                    <a href="javascript:void(0);"><i class="bx bx-trash me-2"></i></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!--/ End: Layout Demo -->
    </div>
</div>
<!-- / End: Content -->
@endsection