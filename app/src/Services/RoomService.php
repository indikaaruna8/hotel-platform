<?php

namespace App\Services;

use App\Repository\RoomRepository;
use Generator;

class RoomService
{
    public function __construct(
        private RoomRepository $hotelRepository
    ) {
    }

    public function getAll(): array
    {
        $hotels = $this->hotelRepository->findAll();
        $return = [];
        foreach ($hotels as $hotel) {
            $return[$hotel->getType()] =  [
                'rent' => $hotel->getRent()
            ];
        }
        return $return;
    }
}
