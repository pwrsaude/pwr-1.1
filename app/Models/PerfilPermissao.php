<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PerfilPermissao extends Pivot
{
    use HasFactory;

    protected $table = 'perfil_permissoes';
}
