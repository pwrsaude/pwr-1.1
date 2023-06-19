<!DOCTYPE html>
<html lang="en" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="../../assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>PwrSaúde Checkout</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Icons -->
    <script src="https://kit.fontawesome.com/8fa86258ce.js" crossorigin="anonymous"></script>

    <!-- Core CSS -->
    <link rel="stylesheet" href="../css/rtl/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../css/rtl/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="../libs/perfect-scrollbar/perfect-scrollbar.css" />
    <link rel="stylesheet" href="../libs/typeahead-js/typeahead.css" />
    <!-- Vendor -->
    <link rel="stylesheet" href="../libs/formvalidation/dist/css/formValidation.min.css" />

    <!-- Page CSS -->
    <!-- Page -->
    <link rel="stylesheet" href="../css/pages/page-auth.css" />
    <!-- Helpers -->
    <script src="../js/helpers.js"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="../js/template-customizer.js"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="../js/config.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/tonystar/bootstrap-float-label/v4.0.2/bootstrap-float-label.min.css" />
    <style>
        .sub-mes {
            padding: 0px 0px, 10px;
        }
    </style>

</head>

<body>
    <!-- Content -->
    <div class="authentication-wrapper authentication-cover">
        <div class="authentication-inner row m-0">
            <!-- /Left Text -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 align-items-start authentication-bg p-sm-5 p-4">
                <div class="w-px-400 mx-auto">
                    <h3 class="mb-2"><i class="fa-solid fa-arrow-left"></i> Detalhes do Pagamento</h3>
                    <p class="fw-bold mb-3">Dados de contato</p>
                    <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                        <div class="mb-3">
                            <label for="email" class="has-float-label">
                                <input type="text" class="form-control" id="email" name="email" value="example@com.br" placeholder="Digite seu E-mail" autofocus />
                                <span>E-mail</span>
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="telefone" class="has-float-label">
                                <input type="text" class="form-control" id="telefone" name="telefone" value="(11) 91234-5678" placeholder="Digite seu número de telefone" />
                                <span>Telefone de contato</span>
                            </label>
                        </div>
                        <p class="fw-bold mb-4">Dados do Titular da Assinatura</p>

                        <div class="mb-3">
                            <label for="nome" class="has-float-label">
                                <input type="text" class="form-control" id="nome" name="nome" value="Digite o nome completo" placeholder="" />
                                <span>Nome Completo</span>
                            </label>
                        </div>

                        <div class="input-group mb-3">
                            <label for="sexo" class="has-float-label">
                                <select id="sexo" class="form-select " name="sexo">
                                    <option selected>Selecione uma opção</option>
                                    <option value="F">Feminino</option>
                                    <option value="M">Masculino</option>
                                </select>
                                <span>Sexo</span>
                            </label>
                            <label for="dataN" class="has-float-label ms-3">
                                <input type="date" class="form-control" id="dataN" name="dataN" value="" placeholder="" />
                                <span>Data de Nascimento</span>
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="cpf" class="has-float-label">
                                <input type="text" class="form-control" id="cpf" name="cpf" value="123.456.789-123" placeholder="" />
                                <span>CPF do Assinante Titular</span>
                            </label>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                <label class="form-check-label" for="terms-conditions">
                                    Concordo com os
                                    <a href="javascript:void(0);">Termos de Serviço</a> e a <a href="javascript:void(0);">Política de Privacidade da empresa PwrSaúde
                                </label>
                            </div>
                        </div>
                        <button class="btn btn-primary d-grid w-100">Assinar</button>
                    </form>

                    <div class="divider my-4">
                        <div class="divider-text">Já tenho uma conta</div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3">
                            <i class="tf-icons bx bxl-facebook"></i>
                        </a>

                        <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
                            <i class="tf-icons bx bxl-google-plus"></i>
                        </a>

                        <a href="javascript:;" class="btn btn-icon btn-label-twitter">
                            <i class="tf-icons bx bxl-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Register -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 align-items-center authentication-bg p-sm-5 p-4" style="background-color:antiquewhite;">
                <div class="w-px-600 mx-auto">
                    <div class="card h-100 " style="border-radius: 30px;">
                        <div class="card-body text-center">
                            <h4 class="card-title">Assinatura</h4>
                            <h3 class="card-subtitle mb-4">+Saúde Familiar</h3>
                            <div class="d-flex justify-content-center mb-3">
                                <h1 style="color: #A53794;" class="card-subtitle fw-bold mb-1">R$ 69,90</h1>
                                <sub style="color: #A53794;" class="sub-mes">POR MÊS</sub>
                            </div>

                            <p class="card-text mb-4">
                                Valor garantido por 12 meses
                            </p>
                            <div class="w-px-500 mx-auto">
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">
                                        +Saúde Familiar
                                    </p>
                                    <p class="card-text">
                                        R$ 69,90
                                    </p>
                                </div>
                                <hr class="mt-0">
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">
                                        Subtotal
                                    </p>
                                    <b class="card-text">
                                        R$ 69,90
                                    </b>
                                </div>
                                <hr class="mt-0">
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">
                                        Descontos
                                    </p>
                                    <p class="card-text">
                                        R$ 0,00
                                    </p>
                                </div>
                                <hr class="mt-0">
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">
                                        TOTAL
                                    </p>
                                    <p class="card-text">
                                        R$ 69,90
                                    </p>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="btn btn-outline-primary">CODIGO PROMOCIONAL</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Register -->
        </div>
    </div>

    <!-- / Content -->

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="../libs/jquery/jquery.js"></script>
    <script src="../libs/popper/popper.js"></script>
    <script src="../js/bootstrap.js"></script>
    <script src="../libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../libs/hammer/hammer.js"></script>
    <script src="../libs/i18n/i18n.js"></script>
    <script src="../libs/typeahead-js/typeahead.js"></script>

    <script src="../js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="../libs/formvalidation/dist/js/FormValidation.min.js"></script>
    <script src="../libs/formvalidation/dist/js/plugins/Bootstrap5.min.js"></script>
    <script src="../libs/formvalidation/dist/js/plugins/AutoFocus.min.js"></script>

    <!-- Main JS -->
    <script src="../js/main.js"></script>

    <!-- Page JS -->
    <script src="../js/pages-auth.js"></script>
</body>

</html>