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
        <li class="menu-item">
            <a href="administrador" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Home">Home</div>
            </a>
        </li>
        <!-- ini: Gestão -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Gestão</span>
        </li>
        <li class="menu-item">
            <a href="app-email.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-envelope"></i>
                <div data-i18n="Gestão Financeira">Gestão Financeira</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Gestão de Usuários">Gestão de Usuários</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item">
                    <a href="/painel/admin/gestao-clientes" class="menu-link">
                        <div data-i18n="Clientes">Clientes</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="/painel/admin/gestao-corretores" class="menu-link">
                        <div data-i18n="Corretores">Corretores</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="/painel/admin/gestao-gratuidades" class="menu-link">
                        <div data-i18n="Gratuidades">Gratuidades</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="/painel/admin/gestao-administradores" class="menu-link">
                        <div data-i18n="Administradores">Administradores</div>
                    </a>
                </li>
            </ul>
        </li>
        <!-- end: Gestão -->

        <!-- ini: Configuração -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Sistema</span>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Importações">Importações</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item">
                    <a href="app-user-list.html" class="menu-link">
                        <div data-i18n="Configurações">Configurações</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="app-user-list.html" class="menu-link">
                        <div data-i18n="Fazer Importação">Fazer Importação</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="app-user-list.html" class="menu-link">
                        <div data-i18n="Historico de Importação">Historico de Importação</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="app-chat.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-chat"></i>
                <div data-i18n="Configurações">Configurações</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-check-shield"></i>
                <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item">
                    <a href="app-access-roles.html" class="menu-link">
                        <div data-i18n="Roles">Regras</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="app-access-permission.html" class="menu-link">
                        <div data-i18n="Permission">Permissões</div>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</aside>