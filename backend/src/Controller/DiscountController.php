<?php

namespace App\Controller;

use App\Repository\DiscountRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DiscountController extends AbstractController
{
    #[Route('/api/discount', name: 'api_discount')]
    public function getDiscounts(DiscountRepository $discountRepository): JsonResponse
    {
        $discounts = $discountRepository->findAll();
        $data = [];

        foreach ($discounts as $discount) {
            $data[] = [
                'id' => $discount->getId(),
                'amount' => $discount->getAmount(),
            ];
        }

        return new JsonResponse($data);
    }
}