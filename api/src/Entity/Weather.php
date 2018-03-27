<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WeatherRepository")
 * @ApiResource
 */
class Weather
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $temp;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $humidity;

    /**
     * @ORM\Column(type="boolean")
     */
    private $rain;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $icon;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $creationDate;

    /**
     * @ORM\ManyToOne(targetEntity="Country", inversedBy="weather")
     */
    public $country;

    public function __construct()
    {
        $this->creationDate = new \DateTimeImmutable();
    }

    

    public function getId()
    {
        return $this->id;
    }

    public function getTemp(): ?float
    {
        return $this->temp;
    }

    public function setTemp(?float $temp): self
    {
        $this->temp = $temp;

        return $this;
    }

    public function getHumidity(): ?float
    {
        return $this->humidity;
    }

    public function setHumidity(?float $humidity): self
    {
        $this->humidity = $humidity;

        return $this;
    }

    public function getRain(): ?bool
    {
        return $this->rain;
    }

    public function setRain(bool $rain): self
    {
        $this->rain = $rain;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeImmutable
    {
        return $this->creationDate;
    }

    public function setCreationDate(\DateTimeImmutable $creationDate): self
    {
        $this->creationDate = $creationDate;

        return $this;
    }
}
