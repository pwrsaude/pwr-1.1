<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserPerfis extends Pivot
{
    use HasFactory;

    protected $table = 'user_perfis';
}
