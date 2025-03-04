<?php

namespace App\Controller;

use App\Repository\SizeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SizeController extends AbstractController
{
    #[Route('/api/size', name: 'api_size')]
    public function getSizes(SizeRepository $sizeRepository): JsonResponse
    {
        $sizes = $sizeRepository->findAll();
        $data = [];

        foreach ($sizes as $size) {
            $data[] = [
                'id' => $size->getId(),
                'name' => $size->getName(),
            ];
        }

        return new JsonResponse($data);
    }
}