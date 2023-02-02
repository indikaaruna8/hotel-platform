<?php

namespace App\Services;

use App\Repository\RatesRepository;
use Generator;

class RatesService
{
    public function __construct(
        private RatesRepository $rateRepository
    ) {
    }

    public function getAll(): array
    {
        $rates = $this->rateRepository->findAll();
        $return = [];
        foreach ($rates as $rate) {
            $return[$rate->getName()] =  [
                'rate' => $rate->getRate()
            ];
        }
        return $return;
    }
}
