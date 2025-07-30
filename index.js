const langBtn = document.getElementById("lang-btn");
const langIcon = document.getElementById("lang-icon");
let currentLang = "es";

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    // Cambia el icono según el idioma
    if (currentLang === "es") {
        langIcon.src = "images/Iconos/united-states.png";
        langIcon.alt = "eeuu";
    } else {
        langIcon.src = "images/Iconos/spain.png";
        langIcon.alt = "spain";
    }

document.querySelectorAll("[data-es]").forEach(el => {
    // Si el elemento tiene hijos (como <li><img>Texto</li>), solo cambia el nodo de texto
    if (el.childNodes.length > 1 && el.childNodes[0].nodeType === 1) {
        // Mantiene el <img> y cambia solo el texto
        el.childNodes[1].textContent = el.getAttribute(`data-${currentLang}`);
    } else {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    }
    const designerWeb = document.getElementById("diseñador-web");
const palabraIzq = document.getElementById("palabra-izq");
const palabraDer = document.getElementById("palabra-der");

if (designerWeb && palabraIzq && palabraDer) {
    if (currentLang === "en") {
        // Orden: Web Designer
        if (designerWeb.firstElementChild !== palabraIzq) {
            designerWeb.insertBefore(palabraIzq, palabraDer);
        }
    } else {
        // Orden: Diseñador Web
        if (designerWeb.firstElementChild !== palabraIzq) {
            designerWeb.insertBefore(palabraIzq, palabraDer.nextSibling);
        }
    }
}
});
});