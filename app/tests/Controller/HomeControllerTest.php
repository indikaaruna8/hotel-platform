<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use App\DataFixtures\Data\RoomData;

class HomeControllerTest extends WebTestCase
{

    public function testIndex(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $this->assertResponseIsSuccessful();
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/json');
        $response = $client->getResponse();
        $data = json_decode($response->getContent($response));

        foreach(RoomData::get() as $r){
            $this->assertEquals($r->rent, $data->{$r->type}->rent);
        }
    }
}
