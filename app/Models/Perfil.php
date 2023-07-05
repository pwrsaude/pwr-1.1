<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PerfilPermissao;

class Perfil extends Model
{
    use HasFactory;

    protected $table = 'perfis';

    protected $fillable = [
        'id',
        'name',
        'code',
        'description',
        'restrict',
    ];

    public function Permissoes()
    {
        return $this->belongsToMany(PerfilPermissao::class, 'perfil_permissoes',
            'perfil_id', 'permissao_id',
            'perfil_id', 'permissao_id',
        )
        ->as('perfil_permissoes')
        ->withTimestamps();
    }

    public function User()
    {
        return $this->belongsToMany(User::class, 'user_perfis',
        'perfil_id', 'user_id',
        'perfil_id', 'user_id')
        ->as('user_perfis')->withTimestamps();
    }
}


