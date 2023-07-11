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
        $onboards = $this->modelOnboard->query();

        if(isset($data['email_corretor']))
        {
            $onboards->where('email_corretor', $data['email_corretor'])->where('cadastro_realizado', false);
        }

        if(isset($data['id']))
        {
            $onboards->where('id', $data['id'])->where('cadastro_realizado', false);
        }

        if(empty($data))
        {
            $onboards->where('cadastro_realizado', false);
        }

        return $onboards->get();
    }

    public function finishOnboard($data)
    {
        if($this->modelOnboard->query()->find($data['id'])->update(['cadastro_realizado' => 1]))
        {
            return true;
        }
    }

    public function store($data)
    {
        if(!empty($data))
        {
            $onboard = $this->modelOnboard->query();

            if($onboard->create($data))
                {
                    return $onboard;
                }
        }
    }
}
