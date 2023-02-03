<?php

namespace App\Controller;

use App\Services\RoomService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(RoomService $roomService): JsonResponse
    {
        return $this->json($roomService->getAll());
    }
}
