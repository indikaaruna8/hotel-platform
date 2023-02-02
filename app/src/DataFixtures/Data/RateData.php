<?php

namespace App\DataFixtures\Data;

class RateData
{
    public static function get():  \Generator
    {
        yield (object) ['name' => 'vat' , 'rate' => .005, 'is_deleted'=> 0] ;
        yield (object) ['name' => 'fss' , 'rate' => .008, 'is_deleted'=> 0] ;
    }
}
