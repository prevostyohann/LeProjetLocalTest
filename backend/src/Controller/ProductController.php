<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'add_product', methods: ['POST'])]
    public function addProduct(Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = $request->request->all();
        $file = $request->files->get('image');

        $product = new Product();
        $product->setName($data['name']);
        $product->setPrice($data['price']);
        $product->setDescription($data['description']);
        /* $product->setQuantity($data['quantity']);
        $product->setSize($data['size']);
        $product->setDiscount($data['discount']); */
        $product->setReference($data['reference']);

        if ($file instanceof UploadedFile) {
            $filename = uniqid().'.'.$file->guessExtension();
            try {
                $file->move($this->getParameter('images_directory'), $filename);
                $product->setImage($filename);
            } catch (FileException $e) {
                return new Response('Erreur lors du téléchargement de l\'image', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        }

        $entityManager->persist($product);
        $entityManager->flush();

        return new Response('Produit ajouté avec succès', Response::HTTP_CREATED);
    }
}