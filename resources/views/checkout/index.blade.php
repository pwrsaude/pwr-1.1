<!DOCTYPE html>
<html lang="en" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>PwrSaúde Checkout</title>

    <meta name="description" content="" />

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


    <!-- Helpers -->
    <script src="{{asset('assets/vendor/js/helpers.js')}}"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{asset('assets/js/config.js')}}"></script>
    <!-- Page CSS -->

    <style>
        .sub-mes {
            padding: 0px 0px, 10px;
        }

        @media (max-width: 960px) {
            .inverter {
                -webkit-flex-direction: row-reverse;
                flex-direction: row-reverse;
            }
        }

        .card-2 {
            height: 100vh;
            background-color: #ffe0ea;
        }
    </style>

</head>

<body>
    <!-- Content -->
    <div class="authentication-wrapper authentication-cover " style="background-color: white;">
        <div class="authentication-inner row m-0">
            <!-- Dados de contato e registro assintura -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 align-items-start authentication-bg p-sm-5 p-4  h-100">
                <div class="w-px-400 mx-auto h-100">

                    <h3 class="mb-2"><a href="/finalizar-cadastro" style="color: black;"><i class="fa-solid fa-arrow-left"></i></a> Concluir Assinatura</h3>
                    <p class="fw-bold mb-3">Informe o CPF do titular infomado na compra</p>
                    <form id="formFinalizar" action="{{ route('onboarding.seach.pageFinalizarOnboard') }}" method="POST">
                        @csrf
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="cpf_cnpj">CPF ou CNPJ</label>
                            <div class="input-group input-group-merge">
                                <input type="text" id="cpf_cnpj" name="cpf_cnpj" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary d-grid w-100">Buscar</button>
                    </form>
                    <div class="divider my-4">
                        <div class="divider-text">Precisa de Ajuda?</div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <a href="javascript:;" class="btn btn-icon btn-label-success me-3">
                            <i class='tf-icons bx bxl-whatsapp'></i>
                        </a>

                        <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
                            <i class='tf-icons bx bx-phone-call'></i>
                        </a>

                        <a href="javascript:;" class="btn btn-icon btn-label-twitter">
                            <i class='tf-icons bx bx-envelope'></i>
                        </a>
                    </div>
                </div>

            </div>
            <!-- Dados Assinatura -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 p-sm-5 p-4 card-2">

                <div class="w-px-600 mx-auto">

                </div>
            </div>
            <!-- /Register -->
        </div>
    </div>

    <!-- / Content -->

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="{{asset('assets/vendor/libs/jquery/jquery.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/popper/popper.js')}}"></script>
    <script src="{{asset('assets/vendor/js/bootstrap.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>

    <script src="{{asset('assets/vendor/libs/hammer/hammer.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/i18n/i18n.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/typeahead-js/typeahead.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/sweetalert2/sweetalert2.js')}}"></script>


    <script src="{{asset('assets/vendor/js/menu.js')}}"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="{{asset('assets/vendor/libs/apex-charts/apexcharts.js')}}"></script>
    <!-- Main JS -->
    <script src="{{asset('assets/js/main.js')}}"></script>

    <!-- Page JS -->
    <script src="{{asset('assets/js/forms-extras.js')}}"></script>

    <script src="{{asset('assets/js/pages-auth.js')}}"></script>
</body>

</html>
