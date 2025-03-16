<?php

/* Class Personne */

class Personne
{
    public $nom;
    public $prenom;
    public $age;

    function __construct($nom, $prenom, $age)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }
    function get_nom()
    {
        return $this->nom;
    }
    function get_prenom()
    {
        return $this->prenom;
    }
    function get_age()
    {
        return $this->age;
    }

    public function Afficherinfo($nom, $prenom, $age)
    {
        echo "<p>Information sur l'utilisateur :<br> $nom <br> $prenom <br> $age</p>";
    }
    public function __destruct()
    {
        echo "La class personne est détruite.";
    }
}

$fredh = new Personne("fredh", "steve", 29);

$nom = $fredh->get_nom();
$prenom = $fredh->get_prenom();
$age = $fredh->get_age();

$fredh->Afficherinfo($nom, $prenom, $age);

var_dump($fredh);

echo $fredh->get_nom();
echo $fredh->get_prenom();
echo $fredh->get_age();
