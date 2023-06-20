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
                        <!-- Ini: Layout Demo -->
                        <div class="card overflow-hidden">
                            <!-- Help Center Header -->
                            <div class="help-center-header d-flex flex-column ">
                                <div class="d-flex align-items-end row">
                                    <div class="col-sm-7">
                                        <div class="card-body">
                                            <h4 class="card-title text-primary">Olá, Jonh Doe!</h4>
                                            <p class="mb-4">Seja bem vindo, como podemos ajudar ?</p>
                                            <a href="javascript:;" class="btn btn-sm btn-label-primary">Pagamento da Sua Assinatura Está Pendente, Confira!</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-5 text-center text-sm-left">
                                        <div class="card-body pb-0 px-0 px-md-4">
                                            <img src="{{asset('assets/img/illustrations/medic.png')}}" height="160" alt="View Badge User" data-app-dark-img="illustrations/medic.png" data-app-light-img="illustrations/medic.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Help Center Header -->

                        <!-- Popular Articles -->
                        <div class="help-center-popular-articles py-5">
                            <div class="container-xl">
                                <h4 class="text-center mt-2 mb-4">Principais Opções</h4>
                                <div class="row">
                                    <div class="col-lg-12 mx-auto">
                                        <div class="row mb-3">
                                            <div class="col-md-3 mb-md-0 mb-4">
                                                <div class="card border shadow-none">
                                                    <div class="card-body text-center">
                                                        <img class="mb-3" src="{{asset('assets/img/illustrations/consult.png')}}" height="60" alt="Help center articles">
                                                        <h5>Consultas</h5>
                                                        <p>Marque ou veja suas consultas de forma pratica</p>
                                                        <a class="btn btn-label-primary" href="#">Consultas</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 mb-md-0 mb-4">
                                                <div class="card border shadow-none">
                                                    <div class="card-body text-center">
                                                        <img class="mb-3" src="{{asset('assets/img/illustrations/medicine3.png')}}" height="60" alt="Help center articles">
                                                        <h5>Dependentes</h5>
                                                        <p> Você pode adicionar e remover dependes quando quiser</p>
                                                        <a class="btn btn-label-primary" href="{{url('painel/perfil-dependentes')}}">Ver Mais</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 mb-md-0 mb-4">
                                                <div class="card border shadow-none">
                                                    <div class="card-body text-center">
                                                        <img class="mb-3" src="{{asset('assets/img/illustrations/plan.png')}}" height="60" alt="Help center articles">
                                                        <h5>Minha Assinatura</h5>
                                                        <p>Veja todas informações sobre seu plano contratado</p>
                                                        <a class="btn btn-label-primary" href="{{url('painel/perfil-assinatura')}}">Ver Mais</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 mb-md-0 mb-4">
                                                <div class="card border shadow-none">
                                                    <div class="card-body text-center">
                                                        <img class="mb-3" src="{{asset('assets/img/illustrations/cupom.png')}}" height="60" alt="Help center articles">
                                                        <h5>Clube de Benefícios</h5>
                                                        <p>Veja todas as vantagens que a Pwr Clube pode oferecer</p>
                                                        <a class="btn btn-label-primary" href="#">Ver Mais</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Popular Articles -->
                        <!-- Keep Learning -->
                        <div class="help-center-keep-learning py-5">
                            <div class="container-xl">
                                <h4 class="text-center mb-5">Especialidades Médicas Disponíveis</h4>
                                <div class="row">
                                    <div class="col-lg-10 mx-auto">
                                        <div class="row">
                                            <div class="col-md-4 mb-md-0 mb-4 text-center">
                                                <img src="{{asset('assets/img/icons/unicons/laptop.png')}}" class="mb-2" height="50" alt="Help center blog">
                                                <h5 class="my-3">Blogging</h5>
                                                <p class="mb-1"> Expert tips and tools to improve your website or online store using our blog. </p>
                                                <a href="{{url('pages/help-center-categories')}}" class="d-flex align-items-center justify-content-center mt-2">
                                                    <span class="align-middle me-1">Learn More</span>
                                                    <i class="bx bx-right-arrow-circle scaleX-n1-rtl"></i>
                                                </a>
                                            </div>
                                            <div class="col-md-4 mb-md-0 mb-4 text-center">
                                                <img src="{{asset('assets/img/icons/unicons/bulb.png')}}" class="mb-2" height="50" alt="Help center inspiration">
                                                <h5 class="my-3">Inspiration Center</h5>
                                                <p class="mb-1"> Inspiration from experts to help you start and grow your big ideas. </p>
                                                <a href="{{url('pages/help-center-categories')}}" class="d-flex align-items-center justify-content-center mt-2">
                                                    <span class="align-middle me-1">Learn More</span>
                                                    <i class="bx bx-right-arrow-circle scaleX-n1-rtl"></i></a>
                                            </div>
                                            <div class="col-md-4 text-center">
                                                <img src="{{asset('assets/img/icons/unicons/community.png')}}" class="mb-2" height="50" alt="Help center inspiration">
                                                <h5 class="my-3">Community</h5>
                                                <p class="mb-1"> A group of people living in the same place or having a particular. </p>
                                                <a href="{{url('pages/help-center-categories')}}" class="d-flex align-items-center justify-content-center mt-2">
                                                    <span class="align-middle me-1">Learn More</span>
                                                    <i class="bx bx-right-arrow-circle scaleX-n1-rtl"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Keep Learning -->
                        <!-- Knowledge Base -->
                        <div class="help-center-knowledge-base help-center-bg-alt pt-5 pb-4">
                            <div class="container-xl">
                                <h4 class="text-center mb-4">Perguntas e Rerpostas</h4>
                                <div class="row">
                                    <div class="col-lg-10 mx-auto">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-success p-2 rounded me-2"><i class="bx bx-cart bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Como comprar um plano?</h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1"><a href="{{url('pages/help-center-categories')}}">Pricing Wizard</a></li>
                                                            <li class="text-primary pb-1"><a href="{{url('pages/help-center-categories')}}">Square Sync</a></li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">56 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-info p-2 rounded me-2"><i class="bx bx-laptop bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Como navegar na plataforma?</h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1"><a href="{{url('pages/help-center-categories')}}">First Steps</a></li>
                                                            <li class="text-primary pb-1"><a href="{{url('pages/help-center-categories')}}">Add Images</a></li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">111 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-primary p-2 rounded me-2"><i class="bx bx-user bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Como gerenciar sua conta?</h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1"><a href="{{url('pages/help-center-categories')}}">Insights</a></li>
                                                            <li class="text-primary pb-1">
                                                                <a href="{{url('pages/help-center-categories')}}">Manage Your Orders</a>
                                                            </li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">29 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-danger p-2 rounded me-2"><i class="bx bx-world bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Domains and Email</h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1">
                                                                <a href="{{url('pages/help-center-categories')}}">Access to Admin Account</a>
                                                            </li>
                                                            <li class="text-primary pb-1">
                                                                <a href="{{url('pages/help-center-categories')}}">Send Email From an Alias</a>
                                                            </li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">22 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-warning p-2 rounded me-2"><i class="bx bx-mobile-alt bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Como tenho aceeso a consultas? </h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1">
                                                                <a href="{{url('pages/help-center-categories')}}">Getting Started with the App</a>
                                                            </li>
                                                            <li class="text-primary pb-1">
                                                                <a href="{{url('pages/help-center-categories')}}">Getting Started with Android</a>
                                                            </li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">24 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <span class="badge bg-label-secondary p-2 rounded me-2"><i class="bx bx-envelope bx-sm"></i></span>
                                                            <h5 class="fw-semibold mt-3 ms-1">Email Marketing</h5>
                                                        </div>
                                                        <ul>
                                                            <li class="text-primary py-1"><a href="{{url('pages/help-center-categories')}}">Getting Started</a></li>
                                                            <li class="text-primary pb-1">
                                                                <a href="{{url('pages/help-center-categories')}}">How does this work?</a>
                                                            </li>
                                                        </ul>
                                                        <p class="mb-0 fw-semibold">
                                                            <a href="javascript:void(0);">27 articles</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Knowledge Base -->
                        <!-- Help Area -->
                        <div class="help-center-contact-us help-center-bg-alt">
                            <div class="container-xl">
                                <div class="row justify-content-center py-5 my-3">
                                    <div class="col-md-8 col-lg-6 text-center">
                                        <h4>Ainda precisa de ajuda ?</h4>
                                        <p class="mb-4"> Visite o nosso F.A.Q, caso ainda precise de ajuda contate nosso suporte.</p>
                                        <div class="d-flex justify-content-center flex-wrap gap-4">
                                            <a href="javascript:void(0);" class="btn btn-label-primary">Ir para o F.A.Q</a>
                                            <a href="javascript:void(0);" class="btn btn-label-primary">Suporte</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Help Area -->
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