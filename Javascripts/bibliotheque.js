/**
 * Classe principale pour la gestion des livres avec archivage
 */
class GestionLivres {
    constructor() {
        this.livresActifs = [];    // Liste des livres disponibles
        this.livresArchives = [];  // Liste des livres archivés
    }

    /**
     * Affiche le menu principal et gère les interactions utilisateur
     */
    menu() {
        let choix = prompt(`Choisissez une action :
1. Ajouter un livre
2. Rechercher un livre par titre
3. Afficher les livres triés par titre
4. Afficher tous les livres
5. Supprimer un livre
6. Quitter`);

        switch(choix) {
            case '1': this.ajouterLivre(); break;
            case '2': this.rechercherLivre(); break;
            case '3': this.afficherLivresTries(); break;
            case '4': this.afficherTousLivres(); break;
            case '5': this.supprimerLivre(); break;
            case '6': return;
            default: alert("Choix invalide"); this.menu();
        }
    }

    /**
     * Ajoute un nouveau livre à la collection
     */
    ajouterLivre() {
        const titre = prompt("Entrez le titre du livre :");
        const auteur = prompt("Entrez l'auteur du livre :");
        this.livresActifs.push({ titre, auteur });
        alert("Livre ajouté avec succès !");
        this.menu();
    }

    /**
     * Recherche des livres par titre (recherche partielle insensible à la casse)
     */
    rechercherLivre() {
        const recherche = prompt("Entrez le titre à rechercher :");
        const resultats = this.livresActifs.filter(livre => 
            livre.titre.toLowerCase().includes(recherche.toLowerCase())
        );
        
        if(resultats.length > 0) {
            alert("Résultats de la recherche :\n" + 
                resultats.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
        } else {
            alert("Aucun livre trouvé");
        }
        this.menu();
    }

    /**
     * Affiche les livres triés par ordre alphabétique du titre
     */
    afficherLivresTries() {
        const tries = [...this.livresActifs].sort((a, b) => 
            a.titre.localeCompare(b.titre)
        );
        alert("Livres triés par titre :\n" + 
            tries.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
        this.menu();
    }

    /**
     * Affiche tous les livres non archivés
     */
    afficherTousLivres() {
        alert("Liste de tous les livres :\n" + 
            this.livresActifs.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
        this.menu();
    }

    /**
     * Archive un livre en le déplaçant vers la liste des archives
     */
    supprimerLivre() {
        const titre = prompt("Entrez le titre du livre à supprimer :");
        const index = this.livresActifs.findIndex(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if(index !== -1) {
            this.livresArchives.push(...this.livresActifs.splice(index, 1));
            alert("Livre archivé avec succès");
        } else {
            alert("Livre non trouvé");
        }
        this.menu();
    }
}

// Création de l'instance et démarrage du programme
const gestionnaire = new GestionLivres();
gestionnaire.menu();