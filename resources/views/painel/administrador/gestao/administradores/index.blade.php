@extends('layouts/main')
@section('title', 'PwrSaúde - Gestão de Administradores')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <!-- Ini: Layout Demo -->
    <!-- Basic Bootstrap Table -->
    <div class="card">
        <h4 class="card-header">Gestão de Administradores</h4>
        <div class="card-body demo-vertical-spacing demo-only-element">
            <div class="d-flex justify-content-between">
                <div class="input-group mb-4" style="width: 410px;">
                    <input type="text" class="form-control" placeholder="Digite um CPF/Carterinha/Nome ou Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                </div>
                <div class="demo-inline-spacing">
                    <a href="/painel/admin/gestao/administrador/cadastrar" class="btn btn-primary" type="button" id="button-addon2">Cadastrar Novo Administrador</a>
                </div>
            </div>
            <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Permissões</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        <tr>
                            <td>Albert Cook</td>
                            <td><a href="" class="btn btn-sm btn-primary">
                                    Editar Permissões</a></td>
                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Barry Hunter</td>
                            <td><a href="" class="btn btn-sm btn-primary">
                                    Editar Permissões</a></td>

                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Trevor Baker</td>
                            <td><a href="" class="btn btn-sm btn-primary">
                                    Editar Permissões</a></td>

                            <td><span class="badge bg-label-primary me-1">Ativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
                                </a>
                            </td>
                        </tr>
                        <tr>

                            <td>Jerry Milton</td>
                            <td><a href="" class="btn btn-sm btn-primary">
                                    Editar Permissões</a></td>

                            <td><span class="badge bg-label-danger me-1">Inativo</span></td>
                            <td>
                                <a href="" class="btn btn-icon btn-success">
                                    <span class="tf-icons bx bx-low-vision"></span>
                                </a>
                                <a href="" class="btn btn-icon btn-primary">
                                    <span class="tf-icons bx bx-user"></span>
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