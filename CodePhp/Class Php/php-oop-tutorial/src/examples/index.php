<?php

require_once '../classes/MagicMethods.php';
require_once '../classes/OOPConcepts.php';

// Create an instance of MagicMethods
$magic = new MagicMethods();
$magic->name = "John Doe"; // Using __set
echo $magic->name; // Using __get
echo "<br>";
$magic->greet(); // Using __call

echo "<hr>";

// Create an instance of OOPConcepts
$oop = new OOPConcepts();
$oop->demonstrateEncapsulation();
$oop->demonstrateInheritance();
$oop->demonstratePolymorphism();

?>