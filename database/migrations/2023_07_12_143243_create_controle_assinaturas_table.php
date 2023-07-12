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
        Schema::create('controle_assinaturas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('cliente_id');
            $table->string('stripe_prod');
            $table->string('stripe_price');
            $table->string('stripe_id');
            $table->unsignedBigInteger('tipo_produto_id');
            $table->enum('status', ['active', 'pending', 'inative', 'canceled']);
            $table->unsignedBigInteger('subscription_id');

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
            $table->foreign('cliente_id')->references('id')->on('clientes')->onDelete('cascade');
            $table->foreign('tipo_produto_id')->references('id')->on('tipo_produtos')->onDelete('cascade');
            $table->foreign('subscription_id')->references('id')->on('subscriptions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('controle_assinaturas');
    }
};
