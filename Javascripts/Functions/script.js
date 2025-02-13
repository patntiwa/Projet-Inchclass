function afficherMenu() {
    while (true) {
        let choix = prompt(
            "Menu des Fonctions :\n" +
            "1. Calculer la parité d'un nombre\n" +
            "2. Déterminer la majorité\n" +
            "3. Déterminer le mois correspondant à un numéro\n" +
            "4. Quitter\n" +
            "Entrez le numéro de votre choix :"
        );

        if (choix === null) {
            alert("Opération annulée. Au revoir !");
            break;
        }

        choix = Number(choix);

        switch (choix) {
            case 1:
                verifierMajorite();
                break;
            case 2:
                verifierParite();
                break;
            case 3:
                determinerMois();
                break;
            case 4:
                alert("Merci d'avoir utilisé le programme. Au revoir !");
                return;
            default:
                alert("Choix invalide. Veuillez entrer un numéro entre 1 et 4.");
        }
    }
}


function verifierMajorite(age) {
    while (true) {
            valeur = prompt("Saisir votre age");
            
            age = Number(valeur);
            
            if (isNaN(age)) {
                alert("Ce n'est pas une valeur valide.");
                continue;
            } 
            else {
                    if(age < 0) {
                        alert("pas de valeur négative s'il vous plait");
                        continue;
                    } 
                    else if(age < 18){
                            alert("Vous êtes mineur");
                        } 
                        else{
                            alert("Vous êtes majeur");
                        }
                }
        }
} 
     
function verifierParite() {
    let saisie = prompt("Veuillez entrer un nombre :");
    let nombre = Number(saisie);
    
    if (isNaN(nombre)) {
        alert("Ce n'est pas un nombre valide.");
    } else {
        if (nombre % 2 === 0) {
            alert(`${nombre} est pair.`);
        } else {
            alert(`${nombre} est impair.`);
        }
    }
}

// Fonction pour déterminer le mois correspondant à un numéro
function determinerMois() {
    let numero = prompt("Entrez un numéro de mois (1 à 12) :");
    if (numero === null) return; // Si l'utilisateur annule
    numero = Number(numero);
    const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    if (isNaN(numero) || numero < 1 || numero > 12) {
        alert("Veuillez entrer un numéro de mois valide entre 1 et 12.");
    } else {
        alert("Le mois numéro " + numero + " correspond à " + mois[numero - 1] + ".");
    }
}






