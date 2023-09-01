// JavaScript-koodi osioiden näyttämiseen/piilottamiseen
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Näytä valittu osio ja piilota muut osiot
function showSection(sectionId) {
    // Piilota kaikki osiot ensin
    var sections = document.querySelectorAll(".tasklist, .shoppinglist, .budget, .settings");
    sections.forEach(function (section) {
        section.style.display = "none";
    });

    // Näytä valittu osio
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }

    closeNav();
}

// Kutsu showDefault-funktiota kun sivu latautuu kokonaan
window.onload = function () {
    showSection("TaskList");
};