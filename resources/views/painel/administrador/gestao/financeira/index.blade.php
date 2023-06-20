<!DOCTYPE html>

<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template-starter">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>PWR Saúde - Corretor Dashboard</title>

    <meta name="description" content="" />
    <script src="{{asset('assets/vendor/libs/sweetalert2/sweetalert2.js')}}"></script>
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Icons -->
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/fonts/boxicons.css'))}}" />
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/fonts/fontawesome.css'))}}" />
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/fonts/flag-icons.css'))}}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/css/core.css'))}}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/css/theme-default.css'))}}" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{asset(mix('assets/css/demo.css'))}}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'))}}" />
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/libs/typeahead-js/typeahead.css'))}}" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="{{asset('assets/vendor/js/helpers.js')}}"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="{{asset('assets/vendor/js/template-customizer.js')}}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{asset('assets/js/config.js')}}"></script>
</head>

<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <!-- ini: Menu admin -->
            @include('layouts.sections.navbar.admin')
            <!-- end: Menu-admin -->

            <!-- Layout container -->
            <div class="layout-page">
                <!--  Ini: Navbar -->
                @include('layouts.sections.menu.main')
                <!-- End: Navbar -->
                <!-- Conteudo da Página -->
                <div class="content-wrapper">
                    <!-- Ini: Content -->
                    <div class="container-xxl flex-grow-1 container-p-y">
                        <!-- Ini: Layout Demo -->
                        <div class="row">
                            <div class="col-lg-12 mb-4 order-0">
                                <div class="card">
                                    <div class="d-flex align-items-end row">
                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <small>Filtrar por:</small><br>
                                                <button class="btn btn-outline-primary btn-sm" type="button">Dia</button>
                                                <button class="btn btn-outline-primary btn-sm" type="button">Semana</button>
                                                <button class="btn btn-outline-primary btn-sm" type="button">Quinzena</button>
                                                <button class="btn btn-outline-primary btn-sm" type="button">Mês</button>
                                                <button class="btn btn-outline-primary btn-sm" type="button">Ano</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 text-center text-sm-left">
                                            <div class="card-body ">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-info">
                                                    <p class="card-text">Valores Recebidos</p>
                                                    <div class="d-flex align-items-end mb-2">
                                                        <h4 class="card-title mb-0 me-2">R$ 5.352,00</h4>
                                                        <small class="text-success">(+29%)</small>
                                                    </div>
                                                    <small>Total de Vendas</small>
                                                </div>
                                                <div class="card-icon">
                                                    <span class="badge bg-label-success rounded p-2">
                                                        <i class="bx bx-dollar bx-sm"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-info">
                                                    <p class="card-text">Assinantes Ativos</p>
                                                    <div class="d-flex align-items-end mb-2">
                                                        <h4 class="card-title mb-0 me-2">2030</h4>
                                                        <small class="text-success">(+18%)</small>
                                                    </div>
                                                    <small>Todo Periodo</small>
                                                </div>
                                                <div class="card-icon">
                                                    <span class="badge bg-label-info rounded p-2">
                                                        <i class="bx bx-user-plus bx-sm"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-info">
                                                    <p class="card-text">Clientes a Vencer</p>
                                                    <div class="d-flex align-items-end mb-2">
                                                        <h4 class="card-title mb-0 me-2">62</h4>
                                                    </div>
                                                    <small>Este mês</small>
                                                </div>
                                                <div class="card-icon">
                                                    <span class="badge bg-label-danger rounded p-2">
                                                        <i class="bx bx-pie-chart-alt bx-sm"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-info">
                                                    <p class="card-text">Clientes Inadimplentes</p>
                                                    <div class="d-flex align-items-end mb-2">
                                                        <h4 class="card-title mb-0 me-2">18</h4>
                                                    </div>
                                                    <small>Todo Periodo</small>
                                                </div>
                                                <div class="card-icon">
                                                    <span class="badge bg-label-warning rounded p-2">
                                                        <i class="bx bx-user-voice bx-sm"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ini: Tabela de Clientes -->
                        <div class="card">
                            <h4 class="card-header">Usuários</h4>
                            <div class="card-body demo-vertical-spacing demo-only-element">
                                <div class="input-group mb-4" style="width: 410px;">
                                    <input type="text" class="form-control" placeholder="Digite um CPF/Carterinha/Nome ou Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                                </div>
                                <div class="table-responsive text-nowrap">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Plano do Cliente</th>
                                                <th>Valor</th>
                                                <th>Meio de Pgt.</th>
                                                <th>Dependentes</th>
                                                <th>Status</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-border-bottom-0">
                                            <tr>
                                                <td><a class="dropdown-item" href="pages-account-settings-account.html">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-0">
                                                                <span class="fw-semibold d-block">John Doe</span>
                                                                <small class="text-muted">John@example.com</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                                                <td>R$ 69,90</td>
                                                <td>Cartão Credito</td>
                                                <td>1</td>
                                                <td><span class="badge bg-label-success me-1">Ativo</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a class="dropdown-item" href="pages-account-settings-account.html">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-0">
                                                                <span class="fw-semibold d-block">John Doe</span>
                                                                <small class="text-muted">John@example.com</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                                                <td>R$ 69,90</td>
                                                <td>Cartão Credito</td>
                                                <td>1</td>
                                                <td><span class="badge bg-label-success me-1">Ativo</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a class="dropdown-item" href="pages-account-settings-account.html">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-0">
                                                                <span class="fw-semibold d-block">John Doe</span>
                                                                <small class="text-muted">John@example.com</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Individual</span></td>
                                                <td>R$ 39,90</td>
                                                <td>Cartão Debito</td>
                                                <td>0</td>
                                                <td><span class="badge bg-label-danger me-1">Aguardando Pagamento</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                                            <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- end: Tabela de clientes -->
                        <!--/ End: Layout Demo -->
                    </div>
                    <!-- / End: Content -->

                    <!-- Ini: Footer -->
                    @include('layouts.sections.footer.main')
                    <!-- / End: Footer -->

                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>

        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
        <div class="drag-target"></div>
    </div>
    <!-- / Layout wrapper -->

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="{{asset('assets/vendor/libs/jquery/jquery.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/popper/popper.js')}}"></script>
    <script src="{{asset('assets/vendor/js/bootstrap.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>

    <script src="{{asset('assets/vendor/libs/hammer/hammer.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/i18n/i18n.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/typeahead-js/typeahead.js')}}"></script>

    <script src="{{asset('assets/vendor/js/menu.js')}}"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="{{asset('assets/vendor/libs/apex-charts/apexcharts.js')}}"></script>
    <!-- Main JS -->
    <script src="{{asset('assets/js/main.js')}}"></script>

    <!-- Page JS -->
    <script src="{{asset('assets/js/dashboards-analytics.js')}}"></script>
</body>

</html>