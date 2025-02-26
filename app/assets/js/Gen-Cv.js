// Données globales pour stocker les informations du CV
let cvData = {
  photo: "",
  nom: "",
  prenom: "",
  title: "",
  description: "",
  address: "",
  email: "",
  phone: "",
  competences: [],
  experiences: [],
  formations: [],
  interets: [],
  langues: [],
  references: [],
};

// Fonction pour initialiser le formulaire
document.addEventListener("DOMContentLoaded", function () {
  // Référence à l'iframe
  const iframe = document.querySelector("iframe");

  // Handler pour l'upload de photo
  document
    .getElementById("file-personal-photo")
    .addEventListener("change", handlePhotoUpload);

  // Handlers pour les champs de texte personnels (mise à jour en temps réel)
  const personalFields = [
    "input-personal-lastname",
    "input-personal-firstname",
    "input-personal-title",
    "textarea-personal-description",
    "input-personal-email",
    "input-personal-phone",
    "input-personal-address",
  ];

  personalFields.forEach((fieldId) => {
    document
      .getElementById(fieldId)
      ?.addEventListener("input", updatePersonalInfo);
  });

  // Handlers pour les boutons d'ajout
  document
    .getElementById("button-add-experiencee")
    ?.addEventListener("click", addExperience);
  document
    .getElementById("button-add-education")
    ?.addEventListener("click", addEducation);
  document
    .getElementById("button-add-skill")
    ?.addEventListener("click", addSkill);
  document
    .getElementById("button-add-interest")
    ?.addEventListener("click", addInterest);
  document
    .getElementById("button-add-reference")
    ?.addEventListener("click", addReference);
  document
    .getElementById("button-add-language")
    ?.addEventListener("click", addLanguage);

  // Fonction pour envoyer les données à l'iframe
  function updatePreview() {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(cvData, "*");
    }
  }

  // Fonction pour gérer l'upload de photo
  function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        cvData.photo = event.target.result;
        updatePreview();
      };
      reader.readAsDataURL(file);
    }
  }

  // Fonction pour mettre à jour les informations personnelles
  function updatePersonalInfo() {
    cvData.nom = document.getElementById("input-personal-lastname").value;
    cvData.prenom = document.getElementById("input-personal-firstname").value;
    cvData.title = document.getElementById("input-personal-title").value;
    cvData.description = document.getElementById(
      "textarea-personal-description"
    ).value;
    cvData.email = document.getElementById("input-personal-email").value;
    cvData.phone = document.getElementById("input-personal-phone").value;
    cvData.address = document.getElementById("input-personal-address").value;

    // Validation email basique
    const emailField = document.getElementById("input-personal-email");
    const emailError = document.getElementById("error-personal-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailField.value && !emailRegex.test(emailField.value)) {
      emailError.textContent = "Format d'email invalide";
      emailField.classList.add("border-red-500");
    } else {
      emailError.textContent = "";
      emailField.classList.remove("border-red-500");
    }

    updatePreview();
  }

  // Fonction pour ajouter une expérience
  function addExperience() {
    const poste = document.getElementById("input-experience-jobtitle").value;
    const entreprise = document.getElementById(
      "input-experience-company"
    ).value;
    const debut = document.getElementById("input-experience-startdate").value;
    const fin = document.getElementById("input-experience-enddate").value;
    const description = document.getElementById(
      "textarea-experience-description"
    ).value;

    if (poste && entreprise && debut) {
      const experience = {
        poste: poste,
        entreprise: entreprise,
        debut: formatDate(debut),
        fin: fin ? formatDate(fin) : "Présent",
        description: description,
      };

      cvData.experiences.push(experience);

      // Réinitialiser les champs
      document.getElementById("input-experience-jobtitle").value = "";
      document.getElementById("input-experience-company").value = "";
      document.getElementById("input-experience-startdate").value = "";
      document.getElementById("input-experience-enddate").value = "";
      document.getElementById("textarea-experience-description").value = "";

      // Notification de succès
      showNotification("Expérience ajoutée avec succès!");

      updatePreview();
    } else {
      // Notification d'erreur
      showNotification("Veuillez remplir les champs obligatoires", "error");
    }
  }

  // Fonction pour ajouter une formation
  function addEducation() {
    const diplome = document.querySelector(
      '[name="input-education-degree"]'
    ).value;
    const ecole = document.querySelector(
      '[name="input-education-school"]'
    ).value;
    const debut = document.querySelector(
      '[name="input-education-startdate"]'
    ).value;
    const fin = document.querySelector(
      '[name="input-education-enddate"]'
    ).value;

    if (diplome && ecole) {
      const formation = {
        diplome: diplome,
        ecole: ecole,
        anneeDebut: formatDate(debut),
        anneeFin: fin ? formatDate(fin) : "Présent",
      };

      cvData.formations.push(formation);

      // Réinitialiser les champs
      document.querySelector('[name="input-education-degree"]').value = "";
      document.querySelector('[name="input-education-school"]').value = "";
      document.querySelector('[name="input-education-startdate"]').value = "";
      document.querySelector('[name="input-education-enddate"]').value = "";

      showNotification("Formation ajoutée avec succès!");

      updatePreview();
    } else {
      showNotification("Veuillez remplir les champs obligatoires", "error");
    }
  }

  // Fonction pour ajouter une compétence
  function addSkill() {
    const competence = document.querySelector(
      '[name="input-skill-name"]'
    ).value;

    if (competence) {
      cvData.competences.push(competence);

      // Réinitialiser le champ
      document.querySelector('[name="input-skill-name"]').value = "";

      showNotification("Compétence ajoutée avec succès!");

      updatePreview();
    } else {
      showNotification("Veuillez entrer une compétence", "error");
    }
  }

  // Fonction pour ajouter un centre d'intérêt
  function addInterest() {
    const interet = document.querySelector(
      '[name="input-interest-name"]'
    ).value;

    if (interet) {
      cvData.interets.push(interet);

      // Réinitialiser le champ
      document.querySelector('[name="input-interest-name"]').value = "";

      showNotification("Centre d'intérêt ajouté avec succès!");

      updatePreview();
    } else {
      showNotification("Veuillez entrer un centre d'intérêt", "error");
    }
  }

  // Fonction pour ajouter une référence
  function addReference() {
    const nom = document.getElementById("input-reference-name").value;
    const entreprise = document.getElementById("input-reference-company").value;
    const ville = document.getElementById("input-reference-city").value;
    const telephone = document.getElementById("input-reference-phone").value;
    const email = document.getElementById("input-reference-email").value;

    if (nom && entreprise) {
      const reference = {
        nom: nom,
        entreprise: entreprise,
        ville: ville,
        telephone: telephone,
        email: email,
      };

      cvData.references.push(reference);

      // Réinitialiser les champs
      document.getElementById("input-reference-name").value = "";
      document.getElementById("input-reference-company").value = "";
      document.getElementById("input-reference-city").value = "";
      document.getElementById("input-reference-phone").value = "";
      document.getElementById("input-reference-email").value = "";

      showNotification("Référence ajoutée avec succès!");

      updatePreview();
    } else {
      showNotification("Veuillez remplir les champs obligatoires", "error");
    }
  }

  // Fonction pour ajouter une langue
  function addLanguage() {
    const langue = document.querySelector(
      '[name="select-language-name"]'
    ).value;

    if (langue && langue !== "") {
      cvData.langues.push(langue);

      // Réinitialiser le champ
      document.querySelector('[name="select-language-name"]').value = "";

      showNotification("Langue ajoutée avec succès!");

      updatePreview();
    } else {
      showNotification("Veuillez sélectionner une langue", "error");
    }
  }
  function createEditButton(entry) {
    const button = document.createElement("button");
    button.textContent = "Modifier";
    button.className = "edit-button bg-yellow-500 text-white px-3 py-1 rounded";
    button.addEventListener("click", () => {
      const inputs = entry.querySelectorAll("input, textarea");
      inputs.forEach((input) => input.removeAttribute("disabled"));
    });
    entry.appendChild(button);
  }
  // Fonction pour formater les dates
  function formatDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.getFullYear();
  }

  // Fonction pour afficher une notification
  function showNotification(message, type = "success") {
    // Créer l'élément de notification
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white font-semibold`;
    notification.textContent = message;

    // Ajouter au DOM
    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => {
      notification.classList.add("translate-y-2");
    }, 10);

    // Supprimer après un délai
    setTimeout(() => {
      notification.classList.remove("translate-y-2");
      notification.classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  }

  // Handlers pour les boutons de réinitialisation et de mise à jour
  // Ces boutons sont dans l'iframe mais nous pouvons écouter les messages de l'iframe
  window.addEventListener("message", function (event) {
    if (event.data && event.data.action) {
      if (event.data.action === "reset") {
        // Réinitialiser les données du CV
        cvData = {
          photo: "",
          nom: "",
          prenom: "",
          title: "",
          description: "",
          address: "",
          email: "",
          phone: "",
          competences: [],
          experiences: [],
          formations: [],
          interets: [],
          langues: [],
          references: [],
        };

        // Réinitialiser le formulaire
        document.getElementById("cvForm").reset();

        updatePreview();
        showNotification("Formulaire réinitialisé avec succès!");
      }
    }
  });
});
