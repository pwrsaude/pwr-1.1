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
        Schema::create('assinaturas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cliente_id');
            $table->string('stripe_id');
            $table->string('subscription');
            $table->string('stripe_price');
            $table->string('stripe_prod');
            $table->enum(
                'status',
                [
                    'ativa',
                    'pendente',
                    'inativa',
                    'cancelada'
                ]
            );
            $table->timestamp('ends_at')->nullable();
            $table->integer('quantity')->nullable();
            $table->timestamps();

            $table->foreign('cliente_id')->references('id')->on('clientes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assinaturas');
    }
};
