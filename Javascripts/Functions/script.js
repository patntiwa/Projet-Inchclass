
// Fonction pour déterminer la majorité
function verifierMajorite() {
    do{
         age = prompt("Saisissez votre âge :");
    }while(isNaN(age) || age < 0 || age.trim().lenght === null)  
     alert(age < 18 ? "Vous êtes mineur." : "Vous êtes majeur.");   
}


// Fonction pour calculer la parité d'un nombre
function verifierParite() {
    const saisie = prompt("Veuillez entrer un nombre :");
    if (saisie === null) {
        alert("Opération annulée.");
        return;
    }
    const nombre = Number(saisie);
    if (isNaN(nombre)) {
        alert("Ce n'est pas un nombre valide.");
    } else {
        alert(`${nombre} est ${nombre % 2 === 0 ? "pair" : "impair"}.`);
    }
}

// Fonction pour déterminer le mois correspondant à un numéro
function determinerMois() {
    const numeroStr = prompt("Entrez un numéro de mois (1 à 12) :");
    if (numeroStr === null) {
        alert("Arret du programme.");
        return;
    }
    const numero = Number(numeroStr);
    if (isNaN(numero) || numero < 1 || numero > 12) {
        alert("Veuillez entrer un numéro de mois valide entre 1 et 12.");
    } else {
        // Crée une date avec le mois choisi (numero - 1 car les mois vont de 0 à 11)
        const date = new Date(2024, numero - 1, 1);
        // Obtient le nom du mois en français avec la première lettre en majuscule
        const mois = date.toLocaleDateString('fr-FR', { month: 'long' });
        const moisCapitalized = mois.charAt(0).toUpperCase() + mois.slice(1);
        alert("Le mois numéro " + numero + " correspond à " + moisCapitalized + ".");
    }
}



// Fonction pour afficher un nombre de 1 à 10

// Fonction principale affichant le menu et gérant la navigation
function afficherMenu() {
    while (true) {
        const choix = prompt(
            "Menu des Fonctions :\n" +
            "1. Déterminer la majorité\n" +
            "2. Calculer la parité d'un nombre\n" +
            "3. Déterminer le mois correspondant à un numéro\n" +
            "4. Quitter\n" +
            "Entrez le numéro de votre choix :"
        );
        if (choix === null) {
            alert("Opération annulée. Au revoir !");
            break;
        }
        
        switch(Number(choix)) {
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
        // Après l'exécution d'une fonction, demande de continuer ou quitter
        const continuer = confirm("Voulez-vous revenir au menu principal ?");
        if (!continuer) {
            alert("Merci d'avoir utilisé le programme. Au revoir !");
            break;
        }
    }
}


