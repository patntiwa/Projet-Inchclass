// Fonction Afficher Heure

function afficherHeure(){
	var date = new Date();
	console.log(date);
}

// Fonction avec parametre


function maFonction(monObjet) {
    monObjet.fabricant = "Toyota";
  }
  
  var mavoiture = { fabricant: "Honda", modèle: "Accord", année: 1998 };
  var nom, style, year;
  
  nom = mavoiture.fabricant; // nom aura la valeur "Honda"
  style = mavoiture.modèle; // style aura la valeur "Accord"
  year = mavoiture.année; // year aura la valeur "1998"

  console.log(nom);
  console.log(style);
  console.log(year);

  maFonction(mavoiture);

  nom = mavoiture.fabricant; // y aura la valeur "Toyota"
  // (la propriété fabricant a été modifiée par la fonction)

  function direBonjour(prenom){
	console.log("Bonjour " + prenom);	
}

direBonjour("Aurélien"); // Affiche "Bonjour Aurélien"
direBonjour("Julien"); // Affiche "Bonjour Julien"
direBonjour("Clémence"); // Affiche "Bonjour Clémence"
direBonjour("Marie"); // Affiche "Bonjour Marie"