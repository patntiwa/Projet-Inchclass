document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cvForm");
  const iframe = document.querySelector("iframe");

  if (!form || !iframe) return;

  function sendToPreview(data) {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(data, "*");
    }
  }

  function showError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  }

  function hideError(fieldId) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }

  function validateField(fieldId, value, isRequired = true) {
    if (isRequired && !value.trim()) {
      showError(fieldId, "Ce champ est obligatoire.");
      return false;
    }
    hideError(fieldId);
    return true;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("personal-email", "Veuillez entrer une adresse email valide.");
      return false;
    }
    hideError("personal-email");
    return true;
  }

  function getFormData() {
    return {
      photo:
        document.getElementById("file-personal-photo")?.files[0]?.name || "",
      nom:
        document.getElementById("input-personal-lastname")?.value || "Dupont",
      prenom:
        document.getElementById("input-personal-firstname")?.value || "Jean",
      title:
        document.getElementById("input-personal-title")?.value ||
        "Développeur Full Stack",
      description:
        document.getElementById("textarea-personal-description")?.value ||
        "Passionné par le développement web et les nouvelles technologies.",
      address:
        document.getElementById("input-personal-address")?.value ||
        "123 Rue de Paris, 75001 Paris, France",
      email:
        document.getElementById("input-personal-email")?.value ||
        "jean.dupont@example.com",
      phone:
        document.getElementById("input-personal-phone")?.value ||
        "+33 6 12 34 56 78",
      competences: Array.from(
        document.querySelectorAll(".skill-entry input")
      ).map((el) => el.value) || [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
      ],
      experiences: Array.from(
        document.querySelectorAll(".experience-entry")
      ).map((entry) => ({
        poste:
          entry.querySelector("#input-experience-jobtitle")?.value ||
          "Développeur Full Stack",
        entreprise:
          entry.querySelector("#input-experience-company")?.value || "TechCorp",
        debut:
          entry.querySelector("#input-experience-startdate")?.value || "2019",
        fin:
          entry.querySelector("#input-experience-enddate")?.value || "Présent",
        description:
          entry.querySelector("#textarea-experience-description")?.value ||
          "Développement et maintenance d'applications web.",
      })),
      formations: Array.from(document.querySelectorAll(".education-entry")).map(
        (entry) => ({
          diplome:
            entry.querySelector("#input-education-degree")?.value ||
            "Master en Informatique",
          ecole:
            entry.querySelector("#input-education-school")?.value ||
            "Université de Paris",
          anneeDebut:
            entry.querySelector("#input-education-startdate")?.value || "2015",
          anneeFin:
            entry.querySelector("#input-education-enddate")?.value || "2017",
        })
      ),
      interets: Array.from(
        document.querySelectorAll(".interest-entry input")
      ).map((el) => el.value) || ["Voyages", "Photographie", "Musique"],
      langues: Array.from(
        document.querySelectorAll(".language-entry select")
      ).map((el) => el.value) || ["Anglais (C1)", "Espagnol (B2)"],
      references: Array.from(document.querySelectorAll(".reference-entry")).map(
        (entry) => ({
          nom:
            entry.querySelector("#input-reference-name")?.value ||
            "Marie Durand",
          entreprise:
            entry.querySelector("#input-reference-company")?.value ||
            "TechCorp",
          ville: entry.querySelector("#input-reference-city")?.value || "Paris",
          telephone:
            entry.querySelector("#input-reference-phone")?.value ||
            "+33 6 98 76 54 32",
          email:
            entry.querySelector("#input-reference-email")?.value ||
            "marie.durand@techcorp.com",
        })
      ),
    };
  }

  function updatePreview() {
    clearTimeout(window.debounceTimer);
    window.debounceTimer = setTimeout(() => sendToPreview(getFormData()), 300);
  }

  form.addEventListener("input", updatePreview);
  form.addEventListener("change", updatePreview);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateField(
      "personal-lastname",
      document.getElementById("input-personal-lastname").value
    );
    validateField(
      "personal-firstname",
      document.getElementById("input-personal-firstname").value
    );
    validateEmail(document.getElementById("input-personal-email").value);
  });

  window.addEventListener("message", (event) => {
    if (event.data && event.source === iframe.contentWindow) {
      console.log("Données reçues dans la preview:", event.data);
    }
  });
});
