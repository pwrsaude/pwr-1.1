<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\Auth\PerfilController;
use App\Http\Controllers\Users\ContatoController;
use App\Http\Controllers\Users\UserController;
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

        $PerfilController->criar('Cliente',  'Perfil de Cliente');
        $PerfilController->criar('Administrador', 'Perfil de Administrador', true);
        $PerfilController->criar('Corretor', 'Perfil de Corretor');
    }
}
