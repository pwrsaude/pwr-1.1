@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Cliente')

@section('content')
<!-- Ini: Content -->

<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Corretor /</span>
        Virar Cliente
    </h4>
    <!-- Sticky Actions -->
    <div class="row">
        <div class="col-12">
            <div class="card">

                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <!-- 1. Delivery Address -->
                            <h5 class="mb-4">Informações Pessoais</h5>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label" for="fullname">Nome Completo</label>
                                    <input type="text" id="fullname" class="form-control" placeholder="John Doe" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="phone">CPF</label>
                                    <input type="text" id="phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="email">Email</label>
                                    <div class="input-group input-group-merge">
                                        <input class="form-control" type="text" id="email" name="email" placeholder="john.doe" aria-label="john.doe" aria-describedby="email3" />
                                        <span class="input-group-text" id="email3">@example.com</span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label" for="alt-num">Número de Telefone</label>
                                    <input type="text" id="alt-num" class="form-control phone-mask" placeholder="658 799 8941" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="pincode">CEP</label>
                                    <input type="text" id="pincode" class="form-control" placeholder="658468" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label" for="landmark">Cidade</label>
                                    <input type="text" id="landmark" class="form-control" placeholder="Nr. Wall Street" />
                                </div>
                                <div class="col-md">
                                    <label class="form-label" for="city">Bairro</label>
                                    <input type="text" id="city" class="form-control" placeholder="Jackson" />
                                </div>
                                <div class="col-md">
                                    <label class="form-label" for="state">Estado</label>
                                    <select id="state" class="select2 form-select" data-allow-clear="true">
                                        <option value="">Selecionar</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="address">Complemento</label>
                                    <textarea name="address" class="form-control" id="address" rows="2" placeholder="1456, Mall Road"></textarea>
                                </div>

                            </div>
                            <hr />
                            <!-- 2. Delivery Type -->
                            <h5 class="my-4">2. Selecione um Plano</h5>
                            <div class="row gy-3">
                                <div class="col-md">
                                    <div class="form-check custom-option custom-option-icon">
                                        <label class="form-check-label custom-option-content" for="customRadioIcon1">
                                            <span class="custom-option-body">
                                                <i class="bx bx-briefcase-alt-2"></i>
                                                <span class="custom-option-title"> + Saúde Familiar </span>
                                                <small> Até 9 vidas. </small>
                                                <p>R$ 34,90</p>
                                            </span>
                                            <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="customRadioIcon1" checked />
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="form-check custom-option custom-option-icon">
                                        <label class="form-check-label custom-option-content" for="customRadioIcon2">
                                            <span class="custom-option-body">
                                                <i class="bx bx-paper-plane"></i>
                                                <span class="custom-option-title"> + Saúde Individual </span>
                                                <p>R$ 39,90</p>
                                            </span>
                                            <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="customRadioIcon2" />
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="form-check custom-option custom-option-icon">
                                        <label class="form-check-label custom-option-content" for="customRadioIcon1">
                                            <span class="custom-option-body">
                                                <i class="bx bx-briefcase-alt-2"></i>
                                                <span class="custom-option-title"> + Saúde Básico </span>
                                                <small> Delivery in 3-5 days. </small>
                                                <p>Taxa de Adesão R$ 15,90</p>
                                                <p>R$ 45,90</p>
                                            </span>
                                            <input name="customRadioIcon" class="form-check-input" type="radio" value="" id="customRadioIcon1" checked />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <!-- 3. Apply Promo code -->
                            <h5 class="my-4">3. Cupom</h5>
                            <div class="row g-3">
                                <div class="col-lg-11 col-sm-10 col-8">
                                    <input type="text" class="form-control" placeholder="TAKEITALL" />
                                </div>
                                <div class="col-lg-1 col-sm-2 col-4">
                                    <button class="btn btn-primary">Aplicar</button>
                                </div>
                            </div>
                            <hr />
                            <!-- 4. Payment Method -->
                            <h5 class="my-4">4. Metodo de Pagamento</h5>
                            <div class="row g-3">

                                <div id="payment-element"></div>
                            </div>
                            <hr />
                            <button class="btn btn-primary d-grid w-100">Assinar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Sticky Actions -->
</div>
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
<!-- / End: Content -->
@endsection