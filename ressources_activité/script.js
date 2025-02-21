// Récupérer les éléments nécessaires
const btnAjouter = document.getElementById("ajouter");
const sectionContainer = document.getElementById("section-container");
const btnSubmit = document.getElementById("submitButton");

// Les données du formulaire
let formData = [];

// Fonction pour dupliquer le formulaire
btnAjouter.addEventListener("click", function () {
  // Cloner la section
  const newSection = sectionContainer.cloneNode(true);

  // Ajouter la classe mt-2
  newSection.classList.add("mt-2");

  // Vider les champs
  newSection.querySelectorAll('input[type="text"]').forEach((input) => {
    input.value = "";
  });

  // Modifier le bouton
  const btnClone = newSection.querySelector("#ajouter");
  btnClone.value = " - ";
  // Remplacer les classes Tailwind pour le bouton
  btnClone.classList.remove("bg-blue-500", "hover:bg-blue-600");
  btnClone.classList.add("bg-red-500", "hover:bg-red-600");

  // Ajouter la fonction de suppression
  btnClone.onclick = function () {
    newSection.remove();
  };

  // Insérer le nouveau formulaire avant la section du bouton submit
  btnSubmit
    .closest("section")
    .parentNode.insertBefore(newSection, btnSubmit.closest("section"));
});

// Sauvegarder les données
btnSubmit.addEventListener("click", function () {
  formData = []; // Réinitialiser le tableau
  // Récupérer tous les formulaires
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const data = {
      nom: form.querySelector("#nom").value,
      prenom: form.querySelector("#prenom").value,
    };
    if (data.nom && data.prenom) {
      // Vérifier que les champs ne sont pas vides
      formData.push(data);
    }
  });

  // Sauvegarder dans localStorage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Créer et télécharger le fichier JSON
  const jsonData = JSON.stringify(formData, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Form.json";
  a.click();
  URL.revokeObjectURL(url);
});
