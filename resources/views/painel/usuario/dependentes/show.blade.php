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
            @include('layouts.sections.navbar.usuario')
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