<?php

namespace App\Repositories;

use App\Http\Controllers\Users\OnboardController;
use App\Models\StripeLog;
use Exception;
use Illuminate\Support\Str;

class StripeRepository
{
    private $onboardController;
    private $modelStripeLog;
    public function __construct()
    {
        $this->onboardController = new OnboardController;
        $this->modelStripeLog = new StripeLog();
    }
    public function stripeEvents($event)
    {
        switch ($event->type) {
            case 'checkout.session.completed':
                $this->fazerOnboard($event);
                $this->gerarLogStripe($event);
                break;

            case 'customer.subscription.created':
                $this->setPrice($event);
                $this->gerarLogStripe($event);
                break;

            case 'invoice.created':
                $this->gerarLogStripe($event);
                $this->setQuantity($event);
                // $this->setInvoicePdf($invoiceCreated);
                break;

            default:
                $this->gerarLogStripe($event);
        }
    }

    public function index($position)
    {
        $log = StripeLog::all();

        dd(json_decode($log[$position]->logs));
    }

    public function gerarLogStripe($event)
    {
        $data = [
            'logs' => json_encode($event)
        ];

        $this->modelStripeLog->create($data);
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

        try {

            if (!empty($data)) {
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
                    $data['email_corretor'],
                    $data['uuid']
                );
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o onboard: {$th->getMessage()}",
                500
            );
        }

        return true;
    }

    public function setPrice($event)
    {
        try {
            $data = [
                'stripe_price' => $event->data->object->plan->id,
                'stripe_id' => $event->data->object->customer,
                'stripe_prod' => $event->data->object->plan->product
            ];

            if (!empty($data)) {
                $this->onboardController->setPriceOnboard($data['stripe_id'], $data['stripe_price'], $data['stripe_prod']);
            }
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o stripe_price: {$th->getMessage()}",
                500
            );
        }
    }

    protected function setInvoicePdf($event)
    {
        try {
        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar a fatura: {$th->getMessage()}",
                500
            );
        }
    }

    protected function setQuantity($event)
    {
        $data = [
            'quantity' => $event->data->object->lines->data[0]->quantity,
            'stripe_id' => $event->data->object->customer
        ];

        try {

            if(!empty($data))
            {
                $this->onboardController->setQuantityPlan($data['stripe_id'], $data['quantity']);
            }

        } catch (\Throwable $th) {

            throw new Exception(
                "Não foi possível gravar o a quantidade de assinaturas: {$th->getMessage()}",
                500
            );
        }
    }
}
