<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Rates;
use App\DataFixtures\Data\RateData;

class AppFixtures extends Fixture
{
    const RATES = [

    ];

    public function load(ObjectManager $manager): void
    {
        foreach(RateData::get() as  $r) {
            $rate  = (new Rates())
                ->setName($r->name)
                ->setIsDeleted($r->is_deleted)
                ->setRate($r->rate)
            ;
            $manager->persist($rate);
        }
        $manager->flush();
    }
}
