<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Room;
use App\DataFixtures\Data\RoomData;

class AppFixtures extends Fixture
{


    public function load(ObjectManager $manager): void
    {
        foreach(RoomData::get() as  $r) {
            $rate  = (new Room())
                ->setType($r->type)
                ->setRent($r->rent)
            ;
            $manager->persist($rate);
        }
        $manager->flush();
    }
}
