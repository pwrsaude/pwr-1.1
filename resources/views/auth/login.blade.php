<!DOCTYPE html>

<html lang="pt-br" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Login - PWR SAÚDE</title>

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

    <!-- Vendor -->
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/libs/formvalidation/dist/css/formValidation.min.css'))}}" />

    <!-- Page CSS -->

    <!-- Page -->
    <link rel="stylesheet" href="{{asset(mix('assets/vendor/css/pages/page-auth.css'))}}" />
    <!-- Helpers -->
    <script src="{{asset(mix('assets/vendor/js/helpers.js'))}}"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src=".{{asset(mix('assets/vendor/js/template-customizer.js'))}}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{asset(mix('assets/js/config.js'))}}"></script>
</head>

<body>
    <!-- Content -->

    <div class="authentication-wrapper authentication-cover">
        <div class="authentication-inner row m-0">

            <!-- Login -->
            <div class="d-flex col-12 col-lg-5 col-xl-5 align-items-center authentication-bg p-sm-5 p-4" style="border-radius: 10px 40px 40px 10px;">
                <div class="w-px-400 mx-auto">
                    <!-- Logo -->
                    <div class="app-brand mb-5">
                        <a href="index.html" class="app-brand-link gap-2">
                            <img src="../../assets/img/logo_pwrsaude.png" style="width: 200px;" alt="">
                        </a>
                    </div>
                    <!-- /Logo -->
                    <h4 class="mb-2">Login</h4>

                    <form id="formAuthentication" class="mb-3" action="/painel/home" method="GET">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email ou CPF</label>
                            <input type="text" class="form-control" id="email" name="email-username" placeholder="Digite seu e-mail ou CPF" autofocus />
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="password">Senha</label>
                                <a href="auth-forgot-password-cover.html">
                                    <small>Esqueceu Sua Senha?</small>
                                </a>
                            </div>
                            <div class="input-group input-group-merge">
                                <input type="password" id="password" class="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember-me" />
                                <label class="form-check-label" for="remember-me"> Lembrar me </label>
                            </div>
                        </div>
                        <button class="btn btn-primary d-grid w-100">Entrar</button>
                    </form>

                    <div class="divider my-4">
                        <div class="divider-text">ou</div>
                    </div>
                    <p class="text-center">
                        <span>Não é cliente ?</span>
                        <a href="auth-register-cover.html">
                            <span>Crie uma conta</span>
                        </a>
                    </p>
                </div>
            </div>
            <!-- /Login -->
            <!-- /Left Text -->
            <div class="d-none d-lg-flex col-lg-7 col-xl-7 align-items-center p-5">
                <div class="w-100 d-flex justify-content-center">
                    <img src="../../assets/img/illustrations/boy-with-rocket-light.png" class="img-fluid" alt="Login image" width="700" data-app-dark-img="illustrations/boy-with-rocket-dark.png" data-app-light-img="illustrations/boy-with-rocket-light.png" />
                </div>
            </div>
            <!-- /Left Text -->
        </div>
    </div>

    <!-- / Content -->

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
    <script src="{{asset('assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js')}}"></script>
    <script src="{{asset('assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js')}}"></script>
    <!-- Main JS -->
    <script src="{{asset('assets/js/main.js')}}"></script>

    <!-- Page JS -->
    <script src="{{asset('assets/js/pages-auth.js')}}"></script>

</body>

</html>