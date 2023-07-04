<?php

namespace App\Providers;

use App\View\Composers\ProfileComposer;
use Illuminate\Support\Facades;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class MenuProviderService extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $menuVertical = file_get_contents(base_path('resources/menu/menuVertical.json'));
        $menuVertical = json_decode($menuVertical);

        // Share all menuData to all the views
        View::share('menuData', ["menuVertical" => $menuVertical]);
    }
}
