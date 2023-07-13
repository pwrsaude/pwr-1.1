<?php

namespace App\Repositories;

use App\Models\Assinatura;
use App\Models\AssinaturaItem;
use App\Models\ControleAssinatura;

class AssinaturaRepository
{
    private $modelControleAssinatura;
    private $modelAssinatura;
    private $modelAssinaturaItem;

    public function __construct()
    {
        $this->modelControleAssinatura = new ControleAssinatura();
        $this->modelAssinatura = new Assinatura();
        $this->modelAssinaturaItem = new AssinaturaItem();
    }

    public function storeControleAssinatura($data)
    {
        return $this->modelControleAssinatura->query()->create($data);
    }

    public function storeTableSubscriptions($data)
    {
        $arraySubscription = [
            'user_id' => $data['user_id'],
            'name' => $data['name'],
            'stripe_id' => $data['stripe_id'],
            'stripe_status' => $data['status'],
            'stripe' => $data['quantity'],
            'trial_ends_at' => null,
            'ends_at' => null
        ];

        $subscription = $this->modelAssinatura->query();
        $subscription->create($arraySubscription);

        $this->storeTableSubscriptionItems([
            'subscription_id' => $subscription->id,
            'stripe_id' => $data['stripe_id'],
            'stripe_product' => $data['stripe_prod'],
            'stripe_price' => $data['stripe_price'],
            'quantity' => $subscription->quantity
        ]);

        return $subscription;
    }

    public function storeTableSubscriptionItems($data)
    {
        $subscription = $this->modelAssinatura->query()->where('id', $data['subscription_id'])->first();

        $item = [
            'subscription_id' => $subscription->id,
            'stripe_id' => $subscription->stripe_id,
            'stripe_product' => $data['stripe_prod'],
            'stripe_price' => $data['stripe_price'],
            'quantity' => $data['quantity']
        ];

        $item = $this->modelAssinaturaItem->query()->create($item);
        return $item;
    }
}
