@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Corretor')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <!-- Ini: Layout Demo -->
    <div class="row">
        <div class="col-lg-12 mb-4 order-0">
            <div class="card">
                <div class="d-flex align-items-end row">
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title text-primary">Bom te ver John Doe! 🎉</h5>
                            <p class="mb-4">
                                Aqui estão as atualização do sistema
                            </p>
                            <a href="javascript:;" class="btn btn-sm btn-label-primary">79% DE META ATINGIDA</a>
                        </div>
                    </div>
                    <div class="col-sm-5 text-center text-sm-left">
                        <div class="card-body pb-0 px-0 px-md-4">
                            <img src="../../assets/img/illustrations/man-with-laptop-light.png" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Ini: Receita total -->
        <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div class="card">
                <div class="row row-bordered g-0">
                    <div class="col-md-8">
                        <h5 class="card-header m-0 me-2 pb-3">Grafico de Vendas</h5>
                        <div id="totalRevenueChart" class="px-2"></div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <div class="text-center">
                                <div class="dropdown">
                                    <button class="btn btn-sm btn-label-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        2022
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                        <a class="dropdown-item" href="javascript:void(0);">2021</a>
                                        <a class="dropdown-item" href="javascript:void(0);">2020</a>
                                        <a class="dropdown-item" href="javascript:void(0);">2019</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="growthChart"></div>
                        <div class="text-center fw-semibold pt-3 mb-2">Crescimento das Vendas 12%</div>

                        <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                            <div class="d-flex">
                                <div class="me-2">
                                    <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
                                </div>
                                <div class="d-flex flex-column">
                                    <small>2023</small>
                                    <h6 class="mb-0">R$ 32.5k</h6>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="me-2">
                                    <span class="badge bg-label-info p-2"><i class="bx bx-wallet text-info"></i></span>
                                </div>
                                <div class="d-flex flex-column">
                                    <small>2022</small>
                                    <h6 class="mb-0">R$41.2k</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End: Receita total -->
        <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
            <div class="row">
                <div class="col-6 mb-4">
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
                <div class="col-6 mb-4">
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
                <h4>Links de conversão</h4>
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
<!-- / End: Content -->
@endsection