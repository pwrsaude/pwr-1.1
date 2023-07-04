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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('stripe_id')->nullable();
            $table->string('name');
            $table->string('cpf_cnpj', 14)->unique();
            $table->string('email')->unique();
            $table->bigInteger('carteirinha')->nullable();
            $table->dateTime('data_nascimento');
            $table->enum('sexo', ['F', 'M'])->default('M');
            $table->boolean('cliente_dependente')->default(false);
            $table->enum('status', ['ativo', 'inativo', 'cancelado', 'pendente'])->default('inativo');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};
