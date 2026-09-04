/* =========================================================
   ISSA BAGAYOKO — PORTFOLIO
   JavaScript simple et facile à modifier
   ========================================================= */

// =========================================================
// CONFIGURATION — MODIFIEZ UNIQUEMENT CES VARIABLES
// =========================================================
const WHATSAPP_NUMBER = "22377165614"; // Exemple : 223XXXXXXXX
const WHATSAPP_MESSAGE =
  "Bonjour Issa, je viens de visiter votre portfolio et j'aimerais discuter d'un projet avec vous.";

const EMAIL = "issabagayoko893@gmail.com";
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Année automatique
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Préparation du lien WhatsApp
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const whatsappLinks = [
    document.getElementById("floatingWhatsApp"),
    document.getElementById("contactWhatsApp"),
    document.getElementById("footerWhatsApp")
  ];

  whatsappLinks.forEach((link) => {
    if (link) link.href = whatsappUrl;
  });

  // Affichage des informations de contact
  const emailDisplay = document.getElementById("emailDisplay");
  if (emailDisplay) {
    emailDisplay.textContent = EMAIL;
  }

  const whatsappDisplay = document.getElementById("whatsappDisplay");
  if (whatsappDisplay) {
    whatsappDisplay.textContent = `+${WHATSAPP_NUMBER}`;
  }

  // Fermer le menu mobile après un clic sur un lien
  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && nav.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getInstance(nav);
        if (collapse) collapse.hide();
      }
    });
  });

  // Liens sociaux non configurés : éviter de remonter en haut
  document.querySelectorAll("[data-disabled-link]").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  // Animation d'apparition des sections
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  // Bouton retour en haut
  const backToTop = document.getElementById("backToTop");

  window.addEventListener(
    "scroll",
    () => {
      if (!backToTop) return;

      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    },
    { passive: true }
  );

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
      
