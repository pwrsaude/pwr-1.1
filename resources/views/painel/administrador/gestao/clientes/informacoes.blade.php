@extends('layouts/main')
@section('title', 'PwrSaúde - Informações do Cliente')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Gestão de Clientes /</span> Cliente</h4>
    <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="user-avatar-section">
                        <div class="d-flex align-items-center flex-column">
                            <img class="img-fluid rounded my-4" src="{{asset('assets/img/avatars/10.png')}}" height="110" width="110" alt="User avatar" />
                            <div class="user-info text-center">
                                <h4 class="mb-2">Violet Mendoza</h4>
                                <span class="badge bg-label-secondary">Cliente</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-around flex-wrap my-4 py-3">
                        <div class="d-flex align-items-start me-4 mt-3 gap-3">
                            <span class="badge bg-label-success p-2 rounded"><i class="bx bx-check bx-sm"></i></span>
                            <div>
                                <h5 class="mb-0">ATIVO</h5>
                                <span>Pagamento em Dias</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mt-3 gap-3">
                            <span class="badge bg-label-primary p-2 rounded"><i class="bx bx-customize bx-sm"></i></span>
                            <div>
                                <h5 class="mb-0">3</h5>
                                <span>Associados</span>
                            </div>
                        </div>
                    </div>
                    <h5 class="pb-2 border-bottom mb-4">Informações</h5>
                    <div class="info-container">
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <span class="fw-bold me-2">Nome Completo:</span>
                                <span>Violet Mendoza</span>
                            </li>

                            <li class="mb-3">
                                <span class="fw-bold me-2">Status Assinatura:</span>
                                <span class="badge bg-label-success">Ativa</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">CPF:</span>
                                <span>434.434.443-33</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Carterinha:</span>
                                <span>5345345545</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Data de Nascimento:</span>
                                <span>28/08/1990</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Telefone:</span>
                                <span>(123) 456-7890</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Email:</span>
                                <span>vafgot@vultukir.org</span>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-center pt-3">
                            <a href="javascript:;" class="btn btn-primary me-3" data-bs-target="#editUser" data-bs-toggle="modal">Editar</a>
                            <a href="javascript:;" class="btn btn-label-danger suspend-user">Suspender</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /User Card -->
            <!-- Plan Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <span class="badge bg-label-primary">Assinatura +Saúde Familiar</span>
                        <div class="d-flex justify-content-center">
                            <sup class="h5 pricing-currency mt-3 mb-0 me-1 text-primary">R$</sup>
                            <h1 class="display-5 mb-0 text-primary">69,90</h1>
                            <sub class="fs-6 pricing-duration mt-auto mb-3">/mês</sub>
                        </div>
                    </div>
                    <ul class="ps-3 g-2 my-4">
                        <li class="mb-2">2 Vidas</li>
                        <li class="mb-2">Valor Garantido por 12 Meses</li>
                        <li class="mb-2">Forma de Pagamento: Cartão de Credito</li>
                        <li class="mb-2">Data de Vencimento: 24/04/2024</li>
                    </ul>
                    <div class="d-grid w-100 mt-4 pt-2">
                        <button class="btn btn-primary" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">
                            Cancelar Assinatura
                        </button>
                    </div>
                </div>
            </div>
            <!-- /Plan Card -->
        </div>
        <!--/ User Sidebar -->

        <!-- User Content -->
        <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
            <!-- User Pills -->
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i>Conta</a>
                </li>
            </ul>
            <!--/ User Pills -->

            <!-- Project table -->
            <div class="card mb-4">
                <h5 class="card-header">Dependentes Vinculados</h5>
                <div class="table-responsive mb-3">
                    <table class="table datatable-project border-top">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th class="text-nowrap">CPF</th>
                                <th>Data de Cadastro</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /Project table -->

            <!-- Activity Timeline -->
            <div class="card mb-4">
                <h5 class="card-header">Ultimas Atividades do usuário</h5>
                <div class="card-body">
                    <ul class="timeline">
                        <li class="timeline-item timeline-item-transparent">
                            <span class="timeline-point timeline-point-primary"></span>
                            <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                    <h6 class="mb-0">Fatura Paga</h6>
                                    <small class="text-muted">3 dias atrás</small>
                                </div>
                                <div class="d-flex">
                                    <a href="javascript:void(0)" class="me-3">
                                        <img src="{{asset('assets/img/icons/misc/pdf.png')}}" alt="PDF image" width="15" class="me-2" />
                                        <span class="fw-bold text-body">invoices.pdf</span>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li class="timeline-end-indicator">
                            <i class="bx bx-check-circle"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /Activity Timeline -->

            <!-- Invoice table -->
            <div class="card mb-4">
                <div class="table-responsive mb-3">
                    <h5 class="card-header">Ultimas Faturas</h5>
                    <table class="table datatable-invoice border-top">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th><i class="bx bx-trending-up"></i></th>
                                <th>Total</th>
                                <th>Data</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /Invoice table -->
        </div>
        <!--/ User Content -->
    </div>

    <!-- Modal -->
    <!-- Edit User Modal -->
    <div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-simple modal-edit-user">
            <div class="modal-content p-3 p-md-5">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="text-center mb-4">
                        <h3>Editar informações do usuário</h3>
                        <p>A atualização dos detalhes do usuário receberá uma auditoria de privacidade.</p>
                    </div>
                    <form id="editUserForm" class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label" for="nomeCompleto">Nome Completo</label>
                            <input type="text" id="nomeCompleto" class="form-control" name="nomeCompleto" required />
                            <div class="invalid-feedback">Digite um nome válido.</div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label" for="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" class="form-control" maxlength="14" minlength="11" placeholder="123.456.789-10" required />
                            <div class="invalid-feedback">Digite um CPF válido.</div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label" for="sexo">Sexo</label>
                            <select id="sexo" name="sexo" class="select2 form-select" data-allow-clear="true" required>
                                <option value="">Selecionar</option>
                                <option value="">Feminino</option>
                                <option value="">Masculino</option>
                            </select>
                            <div class="invalid-feedback">Selecione uma opção.</div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label" for="dataNascimento">Data de Nascimento</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" class="form-control" required />
                            <div class="invalid-feedback">Informe uma data de nascimento válida.</div>
                        </div>
                        <div class="col-md-5">
                            <label class="form-label" for="email">Email</label>
                            <div class="input-group">
                                <input class="form-control" type="text" id="email" name="email" placeholder="example@com.br" required />
                                <div class="invalid-feedback">Digite um email válido.</div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <label class="form-label" for="telefone">Número de Telefone</label>
                            <div class="input-group">
                                <span class="input-group-text">BR (+55)</span>
                                <input type="text" id="telefone" name="telefone" type="text" class="form-control" placeholder="(11) 98765-4321" />
                                <div class="invalid-feedback">Digite um email válido.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label" for="cep">CEP</label>
                            <input type="text" id="cep" class="form-control" name="cep" placeholder="72318-552" required />
                            <div class="invalid-feedback">Digite um email válido.</div>
                        </div>
                        <div class="col-md">
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
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label" for="landmark">Cidade</label>
                            <input type="text" id="landmark" class="form-control" name="cidade" />
                        </div>
                        <div class="col-md-6">
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
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary me-sm-3 me-1">Salvar</button>
                            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--/ Edit User Modal -->

    <!-- Add New Credit Card Modal -->
    <div class="modal fade" id="upgradePlanModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
            <div class="modal-content p-3 p-md-5">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="text-center mb-4">
                        <h3>Upgrade Plan</h3>
                        <p>Choose the best plan for user.</p>
                    </div>
                    <form id="upgradePlanForm" class="row g-3" onsubmit="return false">
                        <div class="col-sm-9">
                            <label class="form-label" for="choosePlan">Choose Plan</label>
                            <select id="choosePlan" name="choosePlan" class="form-select" aria-label="Choose Plan">
                                <option selected>Choose Plan</option>
                                <option value="standard">Standard - $99/month</option>
                                <option value="exclusive">Exclusive - $249/month</option>
                                <option value="Enterprise">Enterprise - $499/month</option>
                            </select>
                        </div>
                        <div class="col-sm-3 d-flex align-items-end">
                            <button type="submit" class="btn btn-primary">Upgrade</button>
                        </div>
                    </form>
                </div>
                <hr class="mx-md-n5 mx-n3" />
                <div class="modal-body">
                    <h6 class="mb-0">User current plan is standard plan</h6>
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <div class="d-flex justify-content-center me-2 mt-3">
                            <sup class="h5 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary">$</sup>
                            <h1 class="display-3 mb-0 text-primary">99</h1>
                            <sub class="h5 pricing-duration mt-auto mb-2">/month</sub>
                        </div>
                        <button class="btn btn-label-danger cancel-subscription mt-3">Cancel Subscription</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Add New Credit Card Modal -->

    <!-- /Modal -->
</div>
<!-- / End: Content -->
@endsection
@section('pageScript')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script>
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {
        reverse: true
    });
    $('#dataNascimento').mask('00/00/0000');
</script>

<!-- Vendo JS -->
<script src="{{asset('assets/vendor/libs/moment/moment.js')}}"></script>
<script src="{{asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js')}}"></script>
<!-- Page JS -->
<script src="{{asset('assets/js/modal-edit-user.js')}}"></script>
<script src="{{asset('assets/js/app-user-view.js')}}"></script>
<script src="{{asset('assets/js/app-user-view-account.js')}}"></script>
<script src="{{asset('assets/js/form-validation.js')}}"></script>
<script src="{{asset('assets/js/forms-extras.js')}}"></script>
<script src="{{asset('assets/js/cep.js')}}"></script>
@endsection