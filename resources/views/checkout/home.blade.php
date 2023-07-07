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
    </style>

</head>

<body>
    <!-- Content -->
    <div class="authentication-wrapper authentication-cover " style="background-color: white;">
        <div class="authentication-inner row m-0">
            <!-- Dados de contato e registro assintura -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 align-items-start authentication-bg p-sm-5 p-4" id="este-tem-que-mudar">
                <div class="w-px-400 mx-auto">

                    <h3 class="mb-2"><i class="fa-solid fa-arrow-left"></i> Detalhes do Pagamento</h3>
                    <p class="fw-bold mb-3">Dados de contato</p>
                    <form id="formAuthentication" action="index.html" method="POST">
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="creditCardMask">Email</label>
                            <div class="input-group input-group-merge">
                                <input type="text" id="creditCardMask" name="creditCardMask" class="form-control credit-card-mask" placeholder="example@com.br" aria-describedby="creditCardMask2" />
                                <span class="input-group-text cursor-pointer p-1" id="creditCardMask2"><span class="card-type"></span></span>
                            </div>
                        </div>
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-4">
                            <label class="form-label" for="phone-number-mask">Número de Telefone</label>
                            <div class="input-group">
                                <span class="input-group-text">BR (+55)</span>
                                <input type="text" id="phone-number-mask" class="form-control phone-number-mask" placeholder="(11) 99876-5431" />
                            </div>
                        </div>

                        <p class="fw-bold mb-2">Dados do Titular da Assinatura</p>

                        <div class="col-xl-12 col-md-6 col-sm-12 mb-2">
                            <label class="form-label" for="phone-number-mask">Nome Completo</label>
                            <div class="input-group">
                                <input type="text" id="phone-number-mask" class="form-control phone-number-mask" placeholder="" />
                            </div>
                        </div>

                        <div class="mb-3 col-lg-12 col-xl-12 col-12 mb-0">
                            <label class="form-label" for="form-repeater-1-1">Sexo e Data de Nascimento</label>

                            <div class="input-group">
                                <select id="sexo" class="form-select " id="form-repeater" name="sexo">
                                    <option selected>Selecione uma opção</option>
                                    <option value="F">Feminino</option>
                                    <option value="M">Masculino</option>
                                </select>
                                <input type="date" class="form-control" id="dataN" name="dataN" value="" placeholder="" />
                            </div>
                        </div>

                        <div class="col-xl-12 col-md-6 col-sm-12 mb-4">
                            <label class="form-label" for="phone-number-mask">CPF do Titular da Assinatura</label>
                            <div class="input-group">
                                <input type="text" id="phone-number-mask" class="form-control phone-number-mask" placeholder="" />
                            </div>
                        </div>
                        <p class="fw-bold mb-3">Forma de Pagamento</p>
                        <div class="col-xl-12 col-md-6 col-sm-12 mb-4">

                            <div id="payment-element"></div>
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
            <!-- Dados Assinatura -->
            <div class="d-flex col-12 col-lg-5 col-xl-6 p-sm-5 p-4" style="background-color:#ffe0ea;">

                <div class="w-px-600 mx-auto">
                    <div class="d-flex justify-content-center mb-2">
                        <img src="{{asset('assets/img/logo_pwrsaude.png')}}" alt class="w-px-215 h-px-100" />
                    </div>
                    <div class="card h-50 " style="border-radius: 30px;">
                        <div class="card-body">
                            <h4 class="card-title d-flex justify-content-center">Assinatura</h4>
                            <h3 class="card-subtitle d-flex justify-content-center mb-4">+Saúde Familiar</h3>
                            <div class="d-flex justify-content-center mb-3">
                                <h1 style="color:black;" class="card-subtitle fw-bold mb-1">R$ 69,90</h1>
                                <sub style="color:black;" class="sub-mes">POR MÊS</sub>
                            </div>

                            <p class="card-text d-flex justify-content-center mb-4">
                                Valor garantido por 12 meses
                            </p>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">
                                    +Saúde Familiar
                                </p>
                                <p class="card-text">
                                    R$ 69,90
                                </p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="mb-3">
                                    <div class="input-group">
                                        <button style="height: 30px;" type="button" class="btn btn-sm btn-icon btn-outline-primary">
                                            <span class="tf-icons bx bx-minus"></span>
                                        </button>
                                        <input size="10" class="form-control form-control-sm" type="text" value="1 Associado" readonly />
                                        <button style="height: 30px;" type="button" class="btn btn-sm btn-icon btn-outline-primary">
                                            <span class="tf-icons bx bx-plus"></span>
                                        </button>
                                    </div>
                                </div>
                                <p class="card-text">
                                    R$ 34,90 por vida
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
                            <a href="javascript:void(0)" class="d-flex justify-content-center btn btn-outline-primary">ADICIONAR CÓDIGO PROMOCIONAL</a>

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
    <script src="https://js.stripe.com/v3/"></script>
    <script>
        const stripe = Stripe('{{ env("STRIPE_KEY") }}')
        const cardBtn = document.getElementById('card-button')
        //const cardElement = elements.create('card')

        /*cardElement.mount('#card-element')

        const form = document.getElementById('payment-form')
        const cardBtn = document.getElementById('card-button')
        const cardHolderName = document.getElementById('card-holder-name')*/
        const options = {
            mode: 'subscription',
            amount: 6990,
            currency: 'brl',
            // Fully customizable with appearance API.
            appearance: {
                /*...*/
            },
        };
        const elements = stripe.elements(options);
        const paymentElement = elements.create('payment');
        paymentElement.mount('#payment-element');

        const form = document.getElementById('payment-form');
        let submitted = false;
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Disable double submission of the form
            if (submitted) {
                return;
            }
            submitted = true;
            form.querySelector('button').disabled = true;

            const nameInput = document.querySelector('#name');

            // Confirm the payment given the clientSecret
            // from the payment intent that was just created on
            // the server.
            const {
                error: stripeError
            } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                    return_url: 'https://example.com',
                },
            }).then(function(result) {
                console.log(result)
                if (stripeError) {
                    // reenable the form.
                    submitted = false;
                    form.querySelector('button').disabled = false;
                    return;
                }
            })
        });
    </script>
</body>

</html>