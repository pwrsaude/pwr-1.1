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
            height: 120vh;
            background-color: #ffe0ea;
        }
    </style>

</head>

<body>
    <!-- Content -->
    <div class="authentication-wrapper authentication-cover " style="background-color: white;">
        <div class="authentication-inner row m-0">
            <!-- Dados de contato e registro assintura -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 align-items-start authentication-bg p-sm-5 p-4" id="este-tem-que-mudar">
                <div class="w-px-400 mx-auto">

                    <h3 class="mb-2"><a href="/finalizar-cadastro" style="color: black;"><i class="fa-solid fa-arrow-left"></i></a> Concluir Assinatura</h3>

                    <form id="formFinalizar" action="/checkout/finalizar" method="POST">

                        <p class="fw-bold mb-2">Dados do Titular da Assinatura</p>
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="cpf_cnpj">CPF do Titular da Assinatura</label>
                            <div class="input-group">
                                <input type="text" id="cpf_cnpj" name="cpf_cnpj" class="form-control" value="{{ $onboard['cpf_cliente'] }}" placeholder="" />
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="nomeCompleto">Nome Completo</label>
                            <div class="input-group">
                                <input type="text" id="nomeCompleto" name="nomeCompleto" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div class="mb-3 col-lg-12 col-xl-12 col-12 mb-0">
                            <label class="form-label" for="sexo">Sexo e Data de Nascimento</label>

                            <div class="input-group">
                                <select id="sexo" class="form-select " id="sexo" name="sexo">
                                    <option selected>Selecione uma opção</option>
                                    <option value="F">Feminino</option>
                                    <option value="M">Masculino</option>
                                </select>
                                <input type="date" class="form-control" id="dataN" name="dataN" value="" placeholder="" />
                            </div>
                        </div>

                        <p class="fw-bold mb-3">Dados de contato</p>

                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="email">Email</label>
                            <div class="input-group input-group-merge">
                                <input value="{{ $onboard['email'] }}" type="text" id="email" name="email" class="form-control" placeholder="example@com.br" aria-describedby="creditCardMask2" />
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-4">
                            <label class="form-label" for="numeroTelefone">Número de Telefone</label>
                            <div class="input-group">
                                <span class="input-group-text">BR (+55)</span>
                                <input value="{{ $onboard['telefone'] }}" type="text" id="numeroTelefone" class="form-control" name="numeroTelefone" placeholder="(11) 99876-5431" />
                            </div>
                        </div>
                        <div class="row g-3 mb-4">
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" name="senha" value="" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="confirm_senha">Confimação de Senha</label>
                                <input type="password" id="confirm_senha" class="form-control" name="confirm_senha" value="" placeholder="" />
                            </div>
                        </div>


                        <p class="fw-bold mb-3">Informações de Endereço</p>
                        <div class="row g-3 mb-4">
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="cep">CEP</label>
                                <input type="text" id="cep" class="form-control" name="cep" placeholder="72318-552" required />
                                <div class="invalid-feedback">Digite um email válido.</div>
                            </div>
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="state">Estado</label>
                                <select id="state" class="select2 form-select" name="uf" data-allow-clear="true">
                                    <option value="">Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espirito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="landmark">Cidade</label>
                                <input type="text" id="landmark" class="form-control" name="cidade" />
                            </div>
                            <div class="col-md-6 mb-0">
                                <label class="form-label" for="city">Bairro</label>
                                <input type="text" id="city" class="form-control" name="bairro" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="city">Rua</label>
                                <input type="text" id="city" class="form-control" name="rua" />
                            </div>
                            <div class="col-md">
                                <label class="form-label" for="city">Número</label>
                                <input type="number" id="city" class="form-control" name="numero" placeholder="(Opcional)" />
                            </div>
                        </div>
                        <button onclick="validarSenha()" class="btn btn-primary d-grid w-100">Finalizar Assinatura</button>
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
                    <div class="d-flex justify-content-center mb-2">
                        <img src="{{asset('assets/img/logo_pwrsaude.png')}}" alt class="w-px-215 h-px-100" />
                    </div>
                    <div class="card h-70 " style="border-radius: 30px;">
                        <div class="card-body">
                            <h4 class="card-title d-flex justify-content-center mb-3">Informações da sua Assinatura</h4>
                            <h3 class="card-subtitle d-flex justify-content-center mb-4">{{ $produto['name'] }}</h3>
                            <div class="d-flex justify-content-center mb-3">
                                <h1 style="color:black;" class="card-subtitle fw-bold mb-1">R$ 69,90</h1>
                                <sub style="color:black;" class="sub-mes">POR MÊS</sub>
                            </div>

                            <p class="card-text d-flex justify-content-center mb-4">
                                Valor garantido por 12 meses
                            </p>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">
                                    {{ $produto['name'] }}
                                </p>
                                <p class="card-text">
                                    R$ 69,90
                                </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="mb-3">
                                    {{-- <div class="input-group">
                                        <button style="height: 30px;" type="button" class="btn btn-sm btn-icon btn-outline-primary" readonly>
                                            <span class="tf-icons bx bx-minus"></span>
                                        </button>
                                        <input size="10" class="form-control form-control-sm" type="text" value=" Vidas: {{$onboard['quantity'] }}" readonly />
                                    <button style="height: 30px;" type="button" class="btn btn-sm btn-icon btn-outline-primary" readonly>
                                        <span class="tf-icons bx bx-plus"></span>
                                    </button>
                                </div> --}}
                            </div>
                            <p class="card-text">
                                R$ 34,90 por vida
                            </p>
                        </div>
                        <hr class="mt-0">
                        <div class="d-flex justify-content-between">
                            <p class="card-text">
                                Quantidade de Vidas
                            </p>
                            <b class="card-text">
                                {{ $onboard['quantity'] }}
                            </b>
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
                </div>
            </div>
        </div>
        <!-- /Register -->
    </div>
    </div>

    <!-- / Content -->

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="{{ asset('assets/js/onboarding/onboard.js') }}"></script>
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

    <!-- Main JS -->
    <script src="{{asset('assets/js/main.js')}}"></script>

    <!-- Page JS -->
    <script src="{{asset('assets/js/forms-extras.js')}}"></script>
    <script src="{{asset('assets/js/pages-auth.js')}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script>
        $('#cep').mask('00000-000');
        $('#numeroTelefone').mask('(00) 00000-0000');
        $('#cpf_cnpj').mask('000.000.000-00', {
            reverse: true
        });
    </script>
    <script src="{{asset('assets/js/form-validation.js')}}"></script>
    <script src="{{asset('assets/js/forms-extras.js')}}"></script>
    <script src="{{asset('assets/js/cep.js')}}"></script>
</body>

</html>