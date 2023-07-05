@extends('layouts/main')
@section('title', 'PwrSaúde - Minhas Vendas')

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
  <!-- Ini: Layout Demo -->
  <div class="row">
    <div class="col-lg-12 mb-4 order-0">
      <div class="card">
        <div class="d-flex align-items-end row">
          <div class="col-sm-7">
            <div class="card-body">
              <small>Filtrar por:</small><br>
              <button class="btn btn-outline-primary btn-sm" type="button">Dia</button>
              <button class="btn btn-outline-primary btn-sm" type="button">Semana</button>
              <button class="btn btn-outline-primary btn-sm" type="button">Quinzena</button>
              <button class="btn btn-outline-primary btn-sm" type="button">Mês</button>
              <button class="btn btn-outline-primary btn-sm" type="button">Ano</button>
            </div>
          </div>
          <div class="col-sm-5 text-center text-sm-left">
            <div class="card-body ">
              <button class="btn btn-primary" type="button">COPIAR LINK DE VENDAS</button>
              <button class="btn btn-outline-primary" type="button">ACESSAR EXTRATOS</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-info">
                <p class="card-text">Valores Recebidos</p>
                <div class="d-flex align-items-end mb-2">
                  <h4 class="card-title mb-0 me-2">R$ 5.352,00</h4>
                  <small class="text-success">(+29%)</small>
                </div>
                <small>Total de Vendas</small>
              </div>
              <div class="card-icon">
                <span class="badge bg-label-success rounded p-2">
                  <i class="bx bx-dollar bx-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-info">
                <p class="card-text">Clientes Ativos</p>
                <div class="d-flex align-items-end mb-2">
                  <h4 class="card-title mb-0 me-2">530</h4>
                  <small class="text-success">(+18%)</small>
                </div>
                <small>Todo Periodo</small>
              </div>
              <div class="card-icon">
                <span class="badge bg-label-info rounded p-2">
                  <i class="bx bx-user-plus bx-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-info">
                <p class="card-text">Clientes a Vencer</p>
                <div class="d-flex align-items-end mb-2">
                  <h4 class="card-title mb-0 me-2">62</h4>
                </div>
                <small>Este mês</small>
              </div>
              <div class="card-icon">
                <span class="badge bg-label-danger rounded p-2">
                  <i class="bx bx-pie-chart-alt bx-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-info">
                <p class="card-text">Clientes Inadimplentes</p>
                <div class="d-flex align-items-end mb-2">
                  <h4 class="card-title mb-0 me-2">18</h4>
                </div>
                <small>Todo Periodo</small>
              </div>
              <div class="card-icon">
                <span class="badge bg-label-warning rounded p-2">
                  <i class="bx bx-user-voice bx-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ini: Tabela de Clientes -->
  <div class="card">
    <h4 class="card-header">Meus Clientes</h4>
    <div class="card-body demo-vertical-spacing demo-only-element">
      <div class="input-group mb-4" style="width: 410px;">
        <input type="text" class="form-control" placeholder="Digite um CPF/Carterinha/Nome ou Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
      </div>
      <div class="table-responsive text-nowrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Plano do Cliente</th>
              <th>Valor</th>
              <th>Meio de Pgt.</th>
              <th>Dependentes</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            <tr>
              <td><a class="dropdown-item" href="pages-account-settings-account.html">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar">
                        <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div class="flex-grow-0">
                      <span class="fw-semibold d-block">John Doe</span>
                      <small class="text-muted">John@example.com</small>
                    </div>
                  </div>
                </a>
              </td>
              <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
              <td>R$ 69,90</td>
              <td>Cartão Credito</td>
              <td>1</td>
              <td><span class="badge bg-label-success me-1">Ativo</span></td>
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
              <td><a class="dropdown-item" href="pages-account-settings-account.html">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar">
                        <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div class="flex-grow-0">
                      <span class="fw-semibold d-block">John Doe</span>
                      <small class="text-muted">John@example.com</small>
                    </div>
                  </div>
                </a>
              </td>
              <td><span class="badge bg-label-warning me-1">+ Saúde Familiar</span></td>
              <td>R$ 69,90</td>
              <td>Cartão Credito</td>
              <td>1</td>
              <td><span class="badge bg-label-success me-1">Ativo</span></td>
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
              <td><a class="dropdown-item" href="pages-account-settings-account.html">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar">
                        <img src="../../assets/img/avatars/1.png" alt class="w-px-35 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div class="flex-grow-0">
                      <span class="fw-semibold d-block">John Doe</span>
                      <small class="text-muted">John@example.com</small>
                    </div>
                  </div>
                </a>
              </td>
              <td><span class="badge bg-label-warning me-1">+ Saúde Individual</span></td>
              <td>R$ 39,90</td>
              <td>Cartão Debito</td>
              <td>0</td>
              <td><span class="badge bg-label-danger me-1">Aguardando Pagamento</span></td>
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
  <!-- end: Tabela de clientes -->
  <!--/ End: Layout Demo -->
</div>
<!-- / End: Content -->
@endsection