<?php

namespace App\Providers;

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
        $menuVertical = file_get_contents(base_path('resources/menu/menuVertical.json'));
        $menuVertical = json_decode($menuVertical);

        // Share all menuData to all the views
        View::share('menuData', ["menuVertical" => $menuVertical]);
    }
}
