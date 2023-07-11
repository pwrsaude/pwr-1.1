<?php

namespace App\Http\Controllers\Stripe;

use App\Http\Controllers\Controller;
use App\Repositories\StripeRepository;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    private $stripeRepository;

    public function __construct()
    {
        $this->stripeRepository = new StripeRepository;
    }

    public function webhook(Request $request)
    {
        $payload = @file_get_contents('php://input');
        $event = null;

        try{
            $event = \Stripe\Event::constructFrom(json_decode($payload, true));
        } catch(\UnexpectedValueException $r){
            http_response_code(400);
            exit();
        }

        if(!empty($event))
        {
            $this->stripeRepository->stripeEvents($event);
        }
    }
}
