<?php

namespace App\Repositories;

use App\Http\Controllers\Users\OnboardController;
use Illuminate\Support\Str;

class StripeRepository
{
    private $onboardController;
    public function __construct()
    {
        $this->onboardController = new OnboardController;
    }
    public function stripeEvents($event)
    {
        switch($event->type)
        {
            case 'checkout.session.completed':
                break;
        }
    }

    public function fazerOnboard($event)
    {
        $data = [
            'email' => $event->data->object->customer_details->email,
            'stripe_id' => $event->data->object->customer,
            'telefone' => $event->data->object->customer_details->phone,
            'email_corretor' => $event->data->object->custom_fields[0]->text->value,
            'codigo_pagamento' => $event->data->object->invoice,
            'uuid' => Str::orderedUuid(),
            'subscription' => $event->data->object->subscription,
            'cpf_cliente' => $event->data->object->custom_fields[1]->text->value,
            'stripe_price' => null,
            'quantity' => null,
            'stripe_prod' => null,
        ];

        if(!empty($data))
        {
            $this->onboardController->store(
                $data['email'],
                $data['stripe_id'],
                 $data['subscription'],
                 $data['cpf_cliente'],
                 $data['quantity'],
                 $data['stripe_price'],
                 $data['stripe_prod'],
                 $data['telefone'],
                 $data['codigo_pagamento'],
                 $data['email_corretor']
            );
        }

        return true;
    }
}
