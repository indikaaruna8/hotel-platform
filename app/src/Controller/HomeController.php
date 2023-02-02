<?php

namespace App\Controller;

use App\Services\RatesService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(RatesService $ratesService): JsonResponse
    {
        return $this->json($ratesService->getAll());
    }
}
