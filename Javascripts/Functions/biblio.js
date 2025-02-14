    // Listes des livres actifs et archivés
    let livresActifs = [];
    let livresArchives = [];

    // Fonction pour ajouter un nouveau livre à la collection
    function ajouterLivre() {
      const titre = prompt("Entrez le titre du livre :");
      if (titre === null || titre.trim() === "") {
        alert("Titre non valide.");
        return;
      }
      const auteur = prompt("Entrez l'auteur du livre :");
      if (auteur === null || auteur.trim() === "") {
        alert("Auteur non valide.");
        return;
      }
      livresActifs.push({ titre, auteur });
      alert("Livre ajouté avec succès !");
    }

    // Fonction pour rechercher des livres par titre (recherche partielle insensible à la casse)
    function rechercherLivre() {
      const recherche = prompt("Entrez le titre à rechercher :");
      if (recherche === null || recherche.trim() === "") {
        alert("Recherche non valide.");
        return;
      }
      const resultats = livresActifs.filter(livre =>
        livre.titre.toLowerCase().includes(recherche.toLowerCase())
      );
      if (resultats.length > 0) {
        alert("Résultats de la recherche :\n" +
          resultats.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
      } else {
        alert("Aucun livre trouvé.");
      }
    }

    // Fonction pour afficher les livres triés par ordre alphabétique du titre
    function afficherLivresTries() {
      const livresTries = [...livresActifs].sort((a, b) =>
        a.titre.localeCompare(b.titre)
      );
      if (livresTries.length > 0) {
        alert("Livres triés par titre :\n" +
          livresTries.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
      } else {
        alert("Aucun livre disponible.");
      }
    }

    // Fonction pour afficher tous les livres non archivés
    function afficherTousLivres() {
      if (livresActifs.length > 0) {
        alert("Liste de tous les livres :\n" +
          livresActifs.map(l => `${l.titre} - ${l.auteur}`).join("\n"));
      } else {
        alert("Aucun livre disponible.");
      }
    }

    // Fonction pour archiver un livre en le déplaçant vers la liste des archives
    function supprimerLivre() {
      const titre = prompt("Entrez le titre du livre à supprimer :");
      if (titre === null || titre.trim() === "") {
        alert("Titre non valide.");
        return;
      }
      const index = livresActifs.findIndex(livre =>
        livre.titre.toLowerCase() === titre.toLowerCase()
      );
      if (index !== -1) {
        livresArchives.push(livresActifs.splice(index, 1)[0]);
        alert("Livre archivé avec succès.");
      } else {
        alert("Livre non trouvé.");
      }
    }

    // Fonction pour quitter le programme (ici, simplement afficher un message)
    function quitter() {
      if (confirm("Voulez-vous vraiment quitter ?")) {
        alert("Au revoir !");
        // Ici, vous pouvez éventuellement rediriger l'utilisateur ou fermer la fenêtre.
      }
    }