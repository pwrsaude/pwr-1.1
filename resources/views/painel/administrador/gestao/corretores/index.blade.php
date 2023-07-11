@extends('layouts/main')
@section('title', 'PwrSaúde - Gestão de Corretores')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <!-- Ini: Layout Demo -->
    <!-- Basic Bootstrap Table -->
    <div class="card">
        <h4 class="card-header">Gestão de Corretores</h4>
        <div class="card-body demo-vertical-spacing demo-only-element">
            <div class="d-flex justify-content-between">
                <div class="input-group mb-4" style="width: 410px;">
                    <input type="text" class="form-control" placeholder="Digite um CPF/Carterinha/Nome ou Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                </div>
                <a href="/painel/admin/gestao/corretor/cadastrar" class="btn btn-primary" type="button" id="button-addon2">Cadastrar Novo Corretor</a>
            </div>
            <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Plano do Cliente</th>
                            <th>Qtd. Clientes</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        <tr>
                            <td>Albert Cook</td>
                            <td><span class="badge bg-label-warning me-1">Não Tem Plano</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>
                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Barry Hunter</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">70</span></td>
                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Trevor Baker</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">50</span></td>
                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td>Jerry Milton</td>
                            <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
                            <td><span class="badge bg-label-primary me-1">20</span></td>
                            <td><span class="badge bg-label-danger me-1">Inativo</span></td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Editar</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Ver Informações</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                                    </div>
                                </div>
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