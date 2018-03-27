<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\EncoderFactory;
        

class UserController extends Controller
{
    /**
     * @Route(
     *     name="api_users_post",
     *     path="/users",
     *     methods={"POST"},
     *     defaults={
     *         "_api_resource_class"=User::class,
     *         "_api_collection_operation_name"="post"
     *     }
     * )
     */
    public function postAction(User $data, UserPasswordEncoderInterface $encoder): User
    {
        return $this->encodePassword($data, $encoder);
    }

    /**
     * @Route(
     *     name="api_users_put",
     *     path="/users/{id}",
     *     requirements={"id"="\d+"},
     *     methods={"PUT"},
     *     defaults={
     *         "_api_resource_class"=User::class,
     *         "_api_item_operation_name"="put"
     *     }
     * )
     */
    public function putAction(User $data, UserPasswordEncoderInterface $encoder): User
    {
        return $this->encodePassword($data, $encoder);
    }


    /**
     * @Route(
     *     name="check_user",
     *     path="/login"
     * )
     */
    public function checkAction(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $content = $request->getContent();
        $parametersAsArray = json_decode($content, true);

        $userRepo = $this->getDoctrine()
            ->getRepository(User::class);

        $user = $userRepo->loadUserByUsername($parametersAsArray["username"]);

        if (is_null($user)) {
            return new JsonResponse([
                "error" => "Wrong Credentials",
            ]);
        }

        $isValid = $encoder->isPasswordValid($user, $parametersAsArray["password"], $user->getSalt());

        if (!$isValid) {
            return new JsonResponse([
                "error" => "Wrong Credentials",
            ]);
        }

        return new JsonResponse([
            "username" => $user->getUsername(),
            "id" => $user->getId(),
            "email" => $user->getEmail(),
        ]);
    }

    protected function encodePassword(User $data, UserPasswordEncoderInterface $encoder): User
    {
        $encoded = $encoder->encodePassword($data, $data->getPassword());
        $data->setPassword($encoded);

        return $data;
    }
}
