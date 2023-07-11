<?php

namespace App\Http\Controllers\Stripe;

use App\Http\Controllers\Controller;
use App\Repositories\StripeRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Stripe\Stripe;

class StripeController extends Controller
{
    private $stripeRepository;
    private $stripe;

    public function __construct()
    {
        $this->stripeRepository = new StripeRepository;
        $this->stripe = $this->getStripe();
    }

    public function webhook(Request $request)
    {
        $payload = @file_get_contents('php://input');
        $event = null;

        try {
            $event = \Stripe\Event::constructFrom(
                json_decode($payload, true)
            );
        } catch (\UnexpectedValueException $e) {
            Log::debug($e, ['stripe_log']);
            http_response_code(400);
            exit();
        }

        if(!is_null($event))
        {
            $this->stripeRepository->stripeEvents($event);
            http_response_code(200);
        }
    }

    private function getStripe()
    {
        return new \Stripe\StripeClient(env('STRIPE_SECRET'));
    }

    public function index($position)
    {
        try {

            $this->stripeRepository->index($position);
        } catch (\Throwable $th) {

            DB::rollBack();

            throw new Exception(
                "Não foi possível criar o onboard: {$th->getMessage()}",
                500
            );
        }
    }
}
