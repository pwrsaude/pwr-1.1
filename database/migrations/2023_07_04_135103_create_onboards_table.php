<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('onboards', function (Blueprint $table) {
            $table->id('id');
            $table->uuid('uuid')->unique();
            $table->string('email');
            $table->string('stripe_id')->nullable();
            $table->string('subscription')->default(null);
            $table->string('cpf_cliente')->default(null);
            $table->integer('quantity')->nullable();
            $table->string('stripe_price')->nullable();
            $table->string('stripe_prod')->nullable();
            $table->string('telefone');
            $table->string('codigo_pagamento')->nullable();
            $table->boolean('cadastro_realizado')->default(false);
            $table->string('email_corretor')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('onboards');
    }
};
