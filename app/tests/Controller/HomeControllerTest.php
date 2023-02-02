<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use App\DataFixtures\Data\RateData;

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
        foreach(RateData::get() as $r){
            $this->assertSame($r->rate, $data->{$r->name}->rate);
        }
    }
}
