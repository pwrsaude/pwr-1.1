<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $menuAdmin = file_get_contents(base_path('resources/menu/menuAdmin.json'));
        $menuAdmin = json_decode($menuAdmin);

        $menuCorretor = file_get_contents(base_path('resources/menu/menuCorretor.json'));
        $menuCorretor = json_decode($menuCorretor);

        // Adiciona menu em todas views 
        View::share('menuData', ["menuVertical" => $menuAdmin, "menuCorretor" => $menuCorretor]);

        Schema::defaultStringLength(191);
    }
}
