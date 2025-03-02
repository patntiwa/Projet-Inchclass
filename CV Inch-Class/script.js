let cvData = {
  photo: "https://placehold.co/600x400",
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

function sauvegarderDonnees() {
  localStorage.setItem("cvData", JSON.stringify(cvData));
}

function recupererDonnees() {
  const donneesSauvegardees = localStorage.getItem("cvData");
  if (donneesSauvegardees) {
    cvData = JSON.parse(donneesSauvegardees);
    document.getElementById("input-personal-lastname").value = cvData.nom;
    document.getElementById("input-personal-firstname").value = cvData.prenom;
    document.getElementById("input-personal-title").value = cvData.title;
    document.getElementById("textarea-personal-description").value =
      cvData.description;
    document.getElementById("input-personal-address").value = cvData.address;
    document.getElementById("input-personal-email").value = cvData.email;
    document.getElementById("input-personal-phone").value = cvData.phone;
    updatePreview();
  }
}

function updatePreview() {
  document.getElementById("preview-nom").textContent =
    cvData.nom + " " + cvData.prenom;
  document.getElementById("preview-title").textContent = cvData.title;
  document.getElementById("preview-description").textContent =
    cvData.description;
  document.getElementById("preview-address").textContent = cvData.address;
  document.getElementById("preview-email").textContent = cvData.email;
  document.getElementById("preview-phone").textContent = cvData.phone;
  document.getElementById("preview-photo").src = cvData.photo;

  const listeExperiences = document.getElementById("preview-experiences");
  listeExperiences.innerHTML = "";
  cvData.experiences.forEach((exp) => {
    const li = document.createElement("li");
    li.innerHTML = `${exp.poste} chez ${exp.entreprise} (${exp.debut} - ${exp.fin}): <br>${exp.description}`;
    listeExperiences.appendChild(li);
  });

  const listeFormations = document.getElementById("preview-formations");
  listeFormations.innerHTML = "";
  cvData.formations.forEach((formation) => {
    const li = document.createElement("li");
    li.textContent = `${formation.diplome} à ${formation.ecole} (${formation.debut} - ${formation.fin})`;
    listeFormations.appendChild(li);
  });

  const listeCompetences = document.getElementById("preview-competences");
  listeCompetences.innerHTML = "";
  cvData.competences.forEach((competence) => {
    const li = document.createElement("li");
    li.textContent = `${competence.competence}`;
    listeCompetences.appendChild(li);
  });

  const listeInterets = document.getElementById("preview-interets");
  listeInterets.innerHTML = "";
  cvData.interets.forEach((interet) => {
    const li = document.createElement("li");
    li.textContent = `${interet.interet}`;
    listeInterets.appendChild(li);
  });

  const listeReferences = document.getElementById("preview-references");
  listeReferences.innerHTML = "";
  cvData.references.forEach((ref) => {
    const li = document.createElement("li");
    li.textContent = `${ref.nom} (${ref.entreprise}): ${ref.telephone}, ${ref.email}`;
    listeReferences.appendChild(li);
  });
}

document
  .getElementById("file-personal-photo")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        cvData.photo = event.target.result;
        updatePreview();
        sauvegarderDonnees();
      };
      reader.readAsDataURL(file);
    }
  });

function handlePersonalInfoChange() {
  cvData.nom = document.getElementById("input-personal-lastname").value;
  cvData.prenom = document.getElementById("input-personal-firstname").value;
  cvData.title = document.getElementById("input-personal-title").value;
  cvData.description = document.getElementById(
    "textarea-personal-description"
  ).value;
  cvData.address = document.getElementById("input-personal-address").value;
  cvData.email = document.getElementById("input-personal-email").value;
  cvData.phone = document.getElementById("input-personal-phone").value;
  updatePreview();
  sauvegarderDonnees();
}

document
  .getElementById("infopersonnel")
  .querySelectorAll("input, textarea")
  .forEach((input) => {
    input.addEventListener("input", handlePersonalInfoChange);
  });

document.addEventListener("DOMContentLoaded", function () {
  recupererDonnees();

  function creerChampExperience() {
    const div = document.createElement("div");
    div.innerHTML = `
            <label>Poste:</label><input type="text" class="poste">
            <label>Entreprise:</label><input type="text" class="entreprise">
            <label>Description:</label><textarea class="description"></textarea>
            <label>Date de début:</label><input type="date" class="debut">
            <label>Date de fin:</label><input type="date" class="fin">
        `;
    div.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("input", mettreAJourApercu);
    });
    return div;
  }

  function creerChampFormation() {
    const div = document.createElement("div");
    div.innerHTML = `
            <label>Diplôme:</label><input type="text" class="diplome">
            <label>École:</label><input type="text" class="ecole">
            <label>Date de début:</label><input type="date" class="debut">
            <label>Date de fin:</label><input type="date" class="fin">
        `;
    div.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("input", mettreAJourApercu);
    });
    return div;
  }

  function creerChampCompetence() {
    const div = document.createElement("div");
    div.innerHTML = `
            <label>Compétence:</label><input type="text" class="competence">
        `;
    div.querySelector("input").addEventListener("input", mettreAJourApercu);
    return div;
  }

  function creerChampInteret() {
    const div = document.createElement("div");
    div.innerHTML = `
            <label>Intérêt:</label><input type="text" class="interet">
        `;
    div.querySelector("input").addEventListener("input", mettreAJourApercu);
    return div;
  }

  function creerChampReference() {
    const div = document.createElement("div");
    div.innerHTML = `
            <label>Nom:</label><input type="text" class="nom">
            <label>Entreprise:</label><input type="text" class="entreprise">
            <label>Téléphone:</label><input type="text" class="telephone">
            <label>Email:</label><input type="text" class="email">
        `;
    div.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", mettreAJourApercu);
    });
    return div;
  }

  document
    .getElementById("button-add-experiencee")
    .addEventListener("click", function () {
      document
        .getElementById("experiences")
        .appendChild(creerChampExperience());
      mettreAJourApercu();
    });

  document
    .getElementById("button-add-formation")
    .addEventListener("click", function () {
      document.getElementById("formations").appendChild(creerChampFormation());
      mettreAJourApercu();
    });

  document
    .getElementById("button-add-competence")
    .addEventListener("click", function () {
      document
        .getElementById("competences")
        .appendChild(creerChampCompetence());
      mettreAJourApercu();
    });

  document
    .getElementById("button-add-interet")
    .addEventListener("click", function () {
      document.getElementById("interets").appendChild(creerChampInteret());
      mettreAJourApercu();
    });

  document
    .getElementById("button-add-reference")
    .addEventListener("click", function () {
      document.getElementById("references").appendChild(creerChampReference());
      mettreAJourApercu();
    });

  function mettreAJourApercu() {
    cvData.nom = document.getElementById("input-personal-lastname").value;
    cvData.prenom = document.getElementById("input-personal-firstname").value;
    cvData.title = document.getElementById("input-personal-title").value;
    cvData.description = document.getElementById(
      "textarea-personal-description"
    ).value;
    cvData.address = document.getElementById("input-personal-address").value;
    cvData.email = document.getElementById("input-personal-email").value;
    cvData.phone = document.getElementById("input-personal-phone").value;

    const listeExperiences = document.getElementById("preview-experiences");
    listeExperiences.innerHTML = "";
    const experiences = document.querySelectorAll("#experiences > div");
    cvData.experiences = [];
    experiences.forEach((exp) => {
      const poste = exp.querySelector(".poste").value;
      const entreprise = exp.querySelector(".entreprise").value;
      const description = exp.querySelector(".description").value;
      const debut = exp.querySelector(".debut").value;
      const fin = exp.querySelector(".fin").value;
      const li = document.createElement("li");
      li.textContent = `${poste} (${entreprise}): ${debut} - ${fin}, ${description}`;
      listeExperiences.appendChild(li);
      cvData.experiences.push({ poste, entreprise, description, debut, fin });
    });

    const listeFormations = document.getElementById("preview-formations");
    listeFormations.innerHTML = "";
    const formations = document.querySelectorAll("#formations > div");
    cvData.formations = [];
    formations.forEach((forma) => {
      const diplome = forma.querySelector(".diplome").value;
      const ecole = forma.querySelector(".ecole").value;
      const debut = forma.querySelector(".debut").value;
      const fin = forma.querySelector(".fin").value;
      const li = document.createElement("li");
      li.textContent = `${diplome} à ${ecole} (${debut} - ${fin})`;
      listeFormations.appendChild(li);
      cvData.formations.push({ diplome, ecole, debut, fin });
    });

    const listeCompetences = document.getElementById("preview-competences");
    listeCompetences.innerHTML = "";
    const competences = document.querySelectorAll("#competences > div");
    cvData.competences = [];
    competences.forEach((comp) => {
      const competence = comp.querySelector(".competence").value;
      const li = document.createElement("li");
      li.textContent = `${competence}`;
      listeCompetences.appendChild(li);
      cvData.competences.push({ competence });
    });

    const listeInterets = document.getElementById("preview-interets");
    listeInterets.innerHTML = "";
    const interets = document.querySelectorAll("#interets > div");
    cvData.interets = [];
    interets.forEach((inter) => {
      const interet = inter.querySelector(".interet").value;
      const li = document.createElement("li");
      li.textContent = `${interet}`;
      listeInterets.appendChild(li);
      cvData.interets.push({ interet });
    });

    const listeReferences = document.getElementById("preview-references");
    listeReferences.innerHTML = "";
    const references = document.querySelectorAll("#references > div");
    cvData.references = [];
    references.forEach((ref) => {
      const nom = ref.querySelector(".nom").value;
      const entreprise = ref.querySelector(".entreprise").value;
      const telephone = ref.querySelector(".telephone").value;
      const email = ref.querySelector(".email").value;
      const li = document.createElement("li");
      li.textContent = `${nom} (${entreprise}): ${telephone}, ${email}`;
      listeReferences.appendChild(li);
      cvData.references.push({ nom, entreprise, telephone, email });
    });

    updatePreview();
    sauvegarderDonnees();
  }
});

updatePreview();
