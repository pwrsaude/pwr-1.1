<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Permissao extends Model
{
    use HasFactory;

    protected $table = 'permissoes';

    protected $fillable = [
        'id',
        'permissao_pai',
        'name',
        'code',
        'description',
        'restrict'
    ];

    public function Usuario()
   {
        return $this->belongsToMany(User::class, 'users',
          'permissao_id', 'user_id',
          'permissao_id', 'user_id'
        )
        ->as('user_permissoes')
        ->withTimestamps();
   }
}
