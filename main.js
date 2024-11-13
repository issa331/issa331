document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour faire défiler la page vers la section des compétences
    document.getElementById("scroll-to-skills").addEventListener("click", function() {
        document.getElementById("skills").scrollIntoView({
            behavior: "smooth"
        });
    });
});