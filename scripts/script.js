// Função para atualizar o conteúdo do elemento baseado no atributo data-lang
function setLanguage() {
    var elements = document.querySelectorAll("[data-lang]");

    elements.forEach(el => {
        // Preenche o conteúdo inicial com base no idioma
        if (el.getAttribute("data-lang") === "pt") {
            el.textContent = el.getAttribute("data-pt");
        } else {
            el.textContent = el.getAttribute("data-en");
        }
    });
}

// Função para alternar entre os idiomas
function toggleLanguage() {
    var elements = document.querySelectorAll("[data-lang]");

    elements.forEach(el => {
        // Alterna entre o idioma português e inglês
        if (el.getAttribute("data-lang") === "pt") {
            el.textContent = el.getAttribute("data-en");
            el.setAttribute("data-lang", "en");
        } else {
            el.textContent = el.getAttribute("data-pt");
            el.setAttribute("data-lang", "pt");
        }
    });
}

// Chama a função setLanguage para definir o idioma inicialmente
document.addEventListener("DOMContentLoaded", setLanguage);
