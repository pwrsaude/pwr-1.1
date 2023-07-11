<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\Auth\PerfilController;
use App\Http\Controllers\Users\ContatoController;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\Auth\PermissaoController;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $UsuarioController = new UserController;
        $Contato = new ContatoController;
        $PerfilController = new PerfilController();
        $PermissaoController = new PermissaoController();

        $visio = $UsuarioController->store('Visio Ignis', 'suport@visioignis.com.br', '12345678', '61245784331', 'Administrador', 5);

        $PerfilController->criar('Cliente',  'Perfil de Cliente');
        $PerfilController->criar('Administrador', 'Perfil de Administrador', true);
        $PerfilController->criar('Corretor', 'Perfil de Corretor');

        $permissao_permissoes = $PermissaoController->criar('Permissões', 'Autorização para gerenciar permissões',null,true,true, 5);
        $PermissaoController->criar('Criar Permisões', 'Criar permissões', $permissao_permissoes->permissao_id, false, true, 5);
        $PermissaoController->criar('Alterar Permisões', 'Alterar permissões', $permissao_permissoes->permissao_id, false, true, 5);
        $PermissaoController->criar('Conceder Permisões', 'Conceder permissões', $permissao_permissoes->permissao_id, false, true, 5);

        $permissao_exportacoes = $PermissaoController->criar('Exportações', 'Criar exportações', null, false, true, 3);
        $PermissaoController->criar('Fazer Exportações', 'Fazer Exportações', $permissao_exportacoes->permissao_id, false, true, 3);
        $PermissaoController->criar('Ver Exportações', 'Ver Exportações', $permissao_exportacoes->permissao_id, false, true, 3);

        $permissao_importacoes = $PermissaoController->criar('Importações', 'Criar Importações', null, false, true, 3);
        $PermissaoController->criar('Fazer Importações', 'Fazer Importações', $permissao_importacoes->permissao_id, false, true, 3);
        $PermissaoController->criar('Ver Importações', 'Ver Importações', $permissao_importacoes->permissao_id, false, true, 3);

        $PermissaoController->criar('Gerenciar Administradores', 'Autorização para gerenciar administradores', null, false, true, 5);
        $PermissaoController->criar('Configurações do sistema', 'Autorização para configurar o sistema', null, true, true, 5);
        $PermissaoController->criar('Gestão de Dependentes', 'Autorização para gerir dependentes', null, false, true, 3);
        $PermissaoController->criar('Gestão de Gratuidades', 'Manipular dados de clientes gratuidades no sistema', null, false, true, 4);
        $PermissaoController->criar('Gestão de Onboarding', 'Manipular dados de clientes onboarding no sistema', null, false, true, 3);

        $PermissaoController->criar('Corretor', 'Permissão de corretor', null, false, true, 3);
        $PermissaoController->criar('Corretora', 'Permissão para empresa corretora', null, true, true, 3);
    }
}
