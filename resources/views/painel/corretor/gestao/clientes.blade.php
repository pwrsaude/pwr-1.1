<!DOCTYPE html>

<html lang="pt-br" class="light-style layout-navbar-fixed layout-menu-fixed" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>PWR Saúde - Corretor Dashboard</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Icons -->
    <link rel="stylesheet" href="../../assets/vendor/fonts/boxicons.css" />
    <link rel="stylesheet" href="../../assets/vendor/fonts/fontawesome.css" />
    <link rel="stylesheet" href="../../assets/vendor/fonts/flag-icons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="../../assets/vendor/css/core.css?v4" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../../assets/vendor/css/theme-default.css?v=2" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../../assets/css/demo.css?v2" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
    <link rel="stylesheet" href="../../assets/vendor/libs/typeahead-js/typeahead.css" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="../../assets/vendor/js/helpers.js"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="../../assets/vendor/js/template-customizer.js"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="../../assets/js/config.js"></script>
</head>

<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <!-- ini: Menu admin -->
            @include('layouts.sections.navbar.corretor')
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
    <script src="../../assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../../assets/vendor/libs/popper/popper.js"></script>
    <script src="../../assets/vendor/js/bootstrap.js"></script>
    <script src="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../../assets/vendor/libs/hammer/hammer.js"></script>
    <script src="../../assets/vendor/libs/i18n/i18n.js"></script>
    <script src="../../assets/vendor/libs/typeahead-js/typeahead.js"></script>

    <script src="../../assets/vendor/js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="../../assets/vendor/libs/apex-charts/apexcharts.js"></script>
    <!-- Main JS -->
    <script src="../../assets/js/main.js"></script>

    <!-- Page JS -->
    <script src="../../assets/js/dashboards-analytics.js"></script>
</body>

</html>