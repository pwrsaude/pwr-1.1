<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\Auth\PerfilController;
use App\Http\Controllers\Users\ContatoController;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\Auth\PermissaoController;
use App\Models\Produto;
use App\Models\TipoProduto;
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
        $TipoProduto = new TipoProduto();
        $Produto = new Produto();

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

        $telemedicina = $TipoProduto->query()->create([
            'type' => 'Telemedicina'
        ]);

        $pwrClube = $TipoProduto->query()->create([
            'type' => 'Clube de Benefícios'
        ]);

        $funerário = $TipoProduto->query()->create([
            'type' => 'Funerário'
        ]);

        $odontologico = $TipoProduto->query()->create([
            'type' => 'Ondontológico'
        ]);

        $psicologia = $TipoProduto->query()->create([
            'type' => 'Telemedicina'
        ]);

        $saudeFamiliarMensal = $Produto->query()->create([
            'name' => '+Saúde Familiar',
            'description' => 'Telemedicina por assinatura com periodicidade mensal',
            'stripe_prod' => 'prod_Nz7RMQo1fl3Q80',
            'tipo_produto_id' => $telemedicina->id
        ]);

        $saudeIndividual = $Produto->query()->create([
            'name' => '+Saúde Individual',
            'description' => 'Telemedicina por assinatura com periodicidade mensal',
            'stripe_prod' => 'prod_O71gcNzojavbNu',
            'tipo_produto_id' => $telemedicina->id
        ]);

        $saudeBasico = $Produto->query()->create([
            'name' => '+Saúde Básica',
            'description' => 'Telemedicina por assinatura com periodicidade mensal',
            'stripe_prod' => 'prod_O71Me0QeLiIIRY',
            'tipo_produto_id' => $telemedicina->id
        ]);

        $clubeBeneficios = $Produto->query()->create([
            'name' => 'Pwr Clube',
            'description' => 'Clube de benefícios por assinatura com periodicidade mensal. Acesso ao App PwrClube',
            'stripe_prod' => 'prod_OFYeAoutqo43ix',
            'tipo_produto_id' => $pwrClube->id
        ]);

        $odontologicoBasico = $Produto->query()->create([
            'name' => 'Odontológico Básico',
            'description' => 'Plano Odontólgico por assinatura com periodicidade mensal',
            'stripe_prod' => 'prod_OFYjxZdkcvMeoz',
            'tipo_produto_id' => $odontologico->id
        ]);
    }
}
