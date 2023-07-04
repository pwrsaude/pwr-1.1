<!-- ini: Menu admin -->
<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="index.html" class="app-brand-link">
            <img src="../../assets/img/logo_pwrsaude.png" style="width: 180px;" alt="">
        </a>
        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <!-- ini: Dashboard -->
        <li class="menu-header small text-uppercase">
            <a class="dropdown-item" href="{{url('painel/perfil-conta')}}">
                <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar avatar-online">
                            <img src="../../assets/img/avatars/5.png" alt class="w-px-40 h-auto rounded-circle" />
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <span class="fw-semibold d-block">John Doe</span>
                        <small class="text-muted">Assinante</small>
                    </div>
                </div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/home" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Home">Home</div>
            </a>
        </li>
        <!-- ini: Gestão -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Inicio</span>
        </li>
        <li class="menu-item">
            <a href="#" class="menu-link">
                <i class="menu-icon tf-icons bx bx-plus-medical"></i>
                <div data-i18n="Minhas Consultas">Minhas Consultas</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/perfil-assinatura" class="menu-link">
                <i class="menu-icon tf-icons bx bx-table"></i>
                <div data-i18n="Minha Assinatura">Minha Assinatura</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/perfil-conta" class="menu-link">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Minha Conta">Minha Conta</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/perfil-dependentes" class="menu-link">
                <i class="menu-icon tf-icons bx bx-group"></i>
                <div data-i18n="Dependentes & Assosiados">Dependentes & Assosiados</div>
            </a>
        </li>
        <!-- end: Gestão -->

        <!-- ini: Configuração -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Configurações</span>
        </li>
        <li class="menu-item">
            <a href="#" class="menu-link">
                <i class="menu-icon tf-icons bx bx-cog"></i>
                <div data-i18n="Configurações">Configurações</div>
            </a>
        </li>
        <!-- end: Configurações -->
    </ul>
</aside>