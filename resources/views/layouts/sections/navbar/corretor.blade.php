<!-- ini: Menu admin -->
<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="index.html" class="app-brand-link">
            <img src="{{URL::asset('img/pwr/logo_pwrsaude.png')}}" style="width: 180px;" alt="">
        </a>
        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <!-- ini: Dashboard -->
        <li class="menu-header small text-uppercase">
            <a class="dropdown-item" href="pages-account-settings-account.html">
                <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar avatar-online">
                            <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <span class="fw-semibold d-block">John Doe</span>
                        <small class="text-muted">Corretor</small>
                    </div>
                </div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/corretor/dashboard" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Home">Home</div>
            </a>
        </li>
        <!-- ini: Gestão -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Gestão</span>
        </li>
        <li class="menu-item">
            <a href="/painel/corretor/clientes" class="menu-link">
                <i class="menu-icon tf-icons bx bx-envelope"></i>
                <div data-i18n="Meus Clientes">Meus Clientes</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="/painel/corretor/vendas" class="menu-link">
                <i class="menu-icon tf-icons bx bx-envelope"></i>
                <div data-i18n="Vendas">Vendas</div>
            </a>
        </li>
        <!-- end: Gestão -->

        <!-- ini: Configuração -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Configurações</span>
        </li>
        <li class="menu-item">
            <a href="app-email.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-envelope"></i>
                <div data-i18n="Configurações">Configurações</div>
            </a>
        </li>
        <!-- end: Configurações -->
    </ul>
</aside>