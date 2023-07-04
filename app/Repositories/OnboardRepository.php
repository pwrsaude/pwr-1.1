<?php

namespace App\Repositories;

use App\Models\Onboard;

class OnboardRepository
{
    private $modelOnboard;

    public function __construct()
    {
        $this->modelOnboard = $this->getModelOnboard();
    }

    private function getModelOnboard()
    {
        return new Onboard();
    }
    public function getOnboards($data)
    {
        $onbards = $this->modelOnboard->query();

        if(isset($data['email_corretor']))
        {
            $onbards->where('email_corretor', $data['email_corretor'])->where('cadastro_realizado', false);
        }

        if(isset($data['id']))
        {
            $onbards->where('id', $data['id'])->where('cadastro_realizado', false);
        }

        if(empty($data))
        {
            $onbards->where('cadastro_realizado', false);
        }

        return $onbards->get();
    }

    public function finishOnboard($data)
    {
        if($this->modelOnboard->query()->find($data['id'])->update(['cadastro_realizado' => 1]))
        {
            return true;
        }
    }
}
