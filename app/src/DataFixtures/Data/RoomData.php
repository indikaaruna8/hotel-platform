<?php

namespace App\DataFixtures\Data;

class RoomData
{
    public static function get():  \Generator
    {
        yield (object) ['type' => 'superior room' , 'rent' => 800.00, 'is_deleted'=> 0] ;
        yield (object) ['type' => 'Deluxe garden room' , 'rent' => 1000.00, 'is_deleted'=> 0] ;
    }
}
