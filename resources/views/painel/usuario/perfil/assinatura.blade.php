@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard Corretor')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Configurações de Conta /</span> Planos e Assinatura
    </h4>

    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
                <li class="nav-item"><a class="nav-link" href="{{url('painel/perfil-conta')}}"><i class="bx bx-user me-1"></i> Minha Conta</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-lock-alt me-1"></i> Segurança</a></li>
                <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class="bx bx-detail me-1"></i> Planos e Assinatura</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-bell me-1"></i> Notificações</a></li>
                <li class="nav-item"><a class="nav-link" href="{{url('painel/perfil-dependentes')}}"><i class="bx bx-group me-1"></i> Dependentes & Associados</a></li>
            </ul>
            <div class="card mb-4">
                <!-- Detalhes da assinatura -->
                <h5 class="card-header">Detalhes do Plano</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 mb-1">
                            <div class="mb-4">
                                <h6 class="fw-semibold mb-2">+Saúde Individual</h6>
                                <p>Um começo simples para todos</p>
                            </div>
                            <div class="mb-4">
                                <h6 class="fw-semibold mb-2">Ativa até 09 de Junho de 2023</h6>
                                <p>Enviaremos uma notificação sobre o vencimento da assinatura</p>
                            </div>
                            <div class="mb-4">
                                <h6 class="fw-semibold mb-2"><span class="me-2">R$ 39.90 por mês</span> <span class="badge bg-label-primary">Popular</span></h6>
                                <p>Plano de Tele Medicina Mensal</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-1">
                            <div class="alert alert-warning mb-4" role="alert">
                                <h6 class="alert-heading fw-bold mb-1"> Atenção!</h6>
                                <span>Sua assinatura está preste a terminar</span>
                            </div>
                            <div class="plan-statistics">
                                <div class="d-flex justify-content-between">
                                    <span class="fw-semibold mb-2">Dias</span>
                                    <span class="fw-semibold mb-2">23 de Julho de 2023</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p class="mt-1 mb-0">6 dias restantes até que seu plano exija atualização</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary me-2 mt-2" data-bs-toggle="modal" data-bs-target="#pricingModal">Alterar Plano</button>
                            <button class="btn btn-label-secondary cancel-subscription mt-2">Cancelar Assinatura</button>
                        </div>
                    </div>
                </div>

                <!-- Plano corrente / dados de assinatura -->
            </div>
            <div class="card mb-4">
                <h5 class="card-header">Formas de Pagamento</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6" id="#paymentType">
                            <form id="creditCardForm" class="row g-3" onsubmit="return false">
                                <div class="col-12">
                                    <div class="form-check form-check-inline">
                                        <input name="collapsible-payment" class="form-check-input" type="radio" value="" id="collapsible-payment-cc" checked="" />
                                        <label class="form-check-label" for="collapsible-payment-cc">Credito e Debito</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input name="collapsible-payment" class="form-check-input" type="radio" value="" id="collapsible-payment-cash" />
                                        <label class="form-check-label" for="collapsible-payment-cash">Pix</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input name="collapsible-payment" class="form-check-input" type="radio" value="" id="collapsible-payment-cash" />
                                        <label class="form-check-label" for="collapsible-payment-cash">Boleto</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label w-100" for="paymentCard">Número do Cartão</label>
                                    <div class="input-group input-group-merge">
                                        <input id="paymentCard" name="paymentCard" class="form-control credit-card-mask" type="text" placeholder="1356 3215 6548 7898" aria-describedby="paymentCard2" />
                                        <span class="input-group-text cursor-pointer p-1" id="paymentCard2"><span class="card-type"></span></span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label" for="paymentName">Nome</label>
                                    <input type="text" id="paymentName" class="form-control" placeholder="John Doe" />
                                </div>
                                <div class="col-6 col-md-3">
                                    <label class="form-label" for="paymentExpiryDate">Data de Vencimento</label>
                                    <input type="text" id="paymentExpiryDate" class="form-control expiry-date-mask" placeholder="MM/YY" />
                                </div>
                                <div class="col-6 col-md-3">
                                    <label class="form-label" for="paymentCvv">CVV</label>
                                    <div class="input-group input-group-merge">
                                        <input type="text" id="paymentCvv" class="form-control cvv-code-mask" maxlength="3" placeholder="654" />
                                        <span class="input-group-text cursor-pointer" id="paymentCvv2"><i class="bx bx-help-circle text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value"></i></span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="switch">
                                        <input type="checkbox" class="switch-input">
                                        <span class="switch-toggle-slider">
                                            <span class="switch-on"></span>
                                            <span class="switch-off"></span>
                                        </span>
                                        <span class="switch-label">Deseja salvar esse cartão para fulturas compras?</span>
                                    </label>
                                </div>
                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-primary me-sm-3 me-1">Salvar alterações</button>
                                    <button type="reset" class="btn btn-label-secondary">Cancelar</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 mt-5 mt-md-0">
                            <h6>Meus Cartões</h6>
                            <div class="added-cards">
                                <div class="cardMaster bg-lighter rounded-2 p-3 mb-3">
                                    <div class="d-flex justify-content-between flex-sm-row flex-column">
                                        <div class="card-information me-2">
                                            <img class="mb-3 img-fluid" src="{{asset('assets/img/icons/payments/mastercard.png')}}" alt="Master Card">
                                            <div class="d-flex align-items-center mb-1 flex-wrap gap-2">
                                                <h6 class="mb-0 me-2">Tom McBride</h6>
                                                <span class="badge bg-label-primary">Primary</span>
                                            </div>
                                            <span class="card-number">&#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727; 9856</span>
                                        </div>
                                        <div class="d-flex flex-column text-start text-sm-end">
                                            <div class="d-flex order-sm-0 order-1 mt-sm-0 mt-3">
                                                <button class="btn btn-label-primary me-2" data-bs-toggle="modal" data-bs-target="#editCCModal">Editar</button>
                                                <button class="btn btn-label-secondary">Deletar</button>
                                            </div>
                                            <small class="mt-sm-auto mt-2 order-sm-1 order-0">Vencimento em 12/26</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="cardMaster bg-lighter rounded-2 p-3">
                                    <div class="d-flex justify-content-between flex-sm-row flex-column">
                                        <div class="card-information me-2">
                                            <img class="mb-3 img-fluid" src="{{asset('assets/img/icons/payments/visa.png')}}" alt="Visa Card">
                                            <h6 class="mb-1">Mildred Wagner</h6>
                                            <span class="card-number">&#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727; 5896</span>
                                        </div>
                                        <div class="d-flex flex-column text-start text-sm-end">
                                            <div class="d-flex order-sm-0 order-1 mt-sm-0 mt-3">
                                                <button class="btn btn-label-primary me-2" data-bs-toggle="modal" data-bs-target="#editCCModal">Editar</button>
                                                <button class="btn btn-label-secondary">Deletar</button>
                                            </div>
                                            <small class="mt-sm-auto mt-2 order-sm-1 order-0">Vencimento em 10/27</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal -->
                            {{--@include('_partials/_modals/modal-edit-cc')--}}
                            <!--/ Modal -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Histórico de cobranças</h5>
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Data</th>
                                <th>Periodo</th>
                                <th>Forma de Pagamento</th>
                                <th>Total R$</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <tr>
                                <td><strong>+Saúde Familiar</strong></td>
                                <td>23/03/2023</td>
                                <td>23/03/2023 até 23/04/2023</td>
                                <td><i class="fa-brands fa-cc-visa"></i><span class="card-number"> &#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727; 5896</span></td>
                                <td>R$ 39,90</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- / End: Content -->
@endsection