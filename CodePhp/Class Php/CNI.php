<?php

/* Class CNI */

class CNI
{
    protected $nom;
    protected $prenom;
    protected $age;


    public function __construct($nom, $prenom, $age)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }

    public function get_nom()
    {
        return $this->nom;
    }
    public function get_prenom()
    {
        return $this->prenom;
    }
    public function get_age()
    {
        return $this->age;
    }
    public function Afficherinfo($nom, $prenom, $age)
    {
        echo "<p>Information sur l'utilisateur :<br> $nom <br> $prenom <br> $age</p>";
    }
    public function __isset($nom, $prenom, $age)
    {
        echo "La variable $nom, $prenom, $age n'est pas définie";
    }
    public function __unset($nom, $prenom, $age)
    {
        echo "La variable $nom, $prenom, $age est détruite";
    }
}

$cni = new CNI("apple", "steve", 29);

$nom = "Duclaire";
$prenom = "Joan";
$age = 23;

$cni->Afficherinfo($nom, $prenom, $age);

var_dump($cni);

echo $cni->get_nom();
echo $cni->get_prenom();
echo $cni->get_age();
