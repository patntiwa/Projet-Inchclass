<?php

/* Class Formulaire */
class Formulaire
{
    public $nom;
    public $email;

    public function __construct($nom, $email)
    {
        $this->nom = $nom;
        $this->email = $email;
    }

    public function get_nom()
    {
        return $this->nom;
    }

    public function get_email()
    {
        return $this->email;
    }

    public function Afficherinfo($nom, $email)
    {
        echo "<p>Information sur l'utilisateur :<br> $nom <br> $email</p>";
    }
}

$form = new Formulaire("Tesla", "essomba@gmail.com");

$nom = $form->get_nom();
$email = $form->get_email();

$form->Afficherinfo($nom, $email);

var_dump($form);
