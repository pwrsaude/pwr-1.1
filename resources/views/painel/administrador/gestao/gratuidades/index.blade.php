<!DOCTYPE html>

<html lang="pt-br" class="light-style layout-navbar-fixed layout-menu-fixed" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>PWR Saúde - Dashboard</title>

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

    <!-- Row Group CSS -->
    <link rel="stylesheet" href="../../assets/vendor/libs/datatables-rowgroup-bs5/rowgroup.bootstrap5.css" />

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
                        <!-- Basic Bootstrap Table -->
                        <div class="card">
                            <h4 class="card-header">Gestão de Gratuidades</h4>
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
                                                <th>Associados</th>
                                                <th>Status</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-border-bottom-0">
                                            <tr>
                                                <td>Albert Cook</td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                                                <td>
                                                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller">
                                                            <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                                                            <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker">
                                                            <img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge bg-label-primary me-1">Ativo</span></td>
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
                                                <td>Barry Hunter</td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                                                <td>
                                                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller">
                                                            <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                                                            <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker">
                                                            <img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge bg-label-primary me-1">Activo</span></td>
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
                                                <td>Trevor Baker</td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>

                                                <td>
                                                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller">
                                                            <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                                                            <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker">
                                                            <img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge bg-label-primary me-1">Ativo</span></td>
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

                                                <td>Jerry Milton</td>
                                                <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                                                <td>
                                                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller">
                                                            <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                                                            <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker">
                                                            <img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span class="badge bg-label-danger me-1">Inativo</span></td>
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