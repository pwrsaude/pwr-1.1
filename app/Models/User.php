<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Permissao;
use App\Models\Contato;
use App\Models\Endereco;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'pid',
        'cpf_cnpj',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function Contato()
    {
        return $this->hasOne(Contato::class, 'user_id');
    }

    public function Enderecos()
    {
        return $this->hasMany(Endereco::class, 'user_id');
    }

    public function Permissoes()
    {
        return $this->belongsToMany(Permissao::class, 'user_permissoes',
            'user_id', 'permissao_id',
            'user_id', 'permissao_id'
        )
        ->as('user_permissoes')
        ->withTimestamps();
    }

    public function Perfis()
    {
        return $this->belongsToMany(Perfil::class, 'user_perfis',
            'user_id', 'perfil_id',
            'user_id', 'perfil_id'
            )
            ->as('user_perfis')
            ->withTimestamps();
    }
}
