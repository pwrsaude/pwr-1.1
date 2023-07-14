@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <!-- Ini: Layout Demo -->
    <div class="col-lg-12 mb-4 order-0">
        <div class="card">
            <h4 class="card-header">Gestão de Clientes</h4>
            <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="demo-inline-spacing">
                                <small>Filtrar por:</small><br>
                                <button class="btn btn-outline-primary btn-sm" type="button">Dia</button>
                                <button class="btn btn-outline-primary btn-sm" type="button">Semana</button>
                                <button class="btn btn-outline-primary btn-sm" type="button">Quinzena</button>
                                <button class="btn btn-outline-primary btn-sm" type="button">Mês</button>
                                <button class="btn btn-outline-primary btn-sm" type="button">Ano</button>
                            </div>
                            <div class="input-group" style="width: 410px;">
                                <input type="text" class="form-control" placeholder="Digite um CPF/Carterinha/Nome ou Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 text-center text-sm-left">
                    <div class="card-body ">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body demo-vertical-spacing demo-only-element">
            <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Plano do Cliente</th>
                            <th>Associados</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        <tr>
                            <td>Albert Cook</td>
                            <td>434.434.224-53</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>

                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="{{route('painel.admin.gestao.gestao-cliente')}}" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-warning">
                                    <span class="tf-icons bx bx-group"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Barry Hunter</td>
                            <td>434.434.224-53</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>

                            <td><span class="badge bg-label-primary me-1">Activo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-warning">
                                    <span class="tf-icons bx bx-group"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Trevor Baker</td>
                            <td>434.434.224-53</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>

                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-warning">
                                    <span class="tf-icons bx bx-group"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jerry Milton</td>
                            <td>434.434.224-53</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>
                            <td><span class="badge bg-label-danger me-1">Inativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-warning">
                                    <span class="tf-icons bx bx-group"></span>
                                </a>
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
@endsection