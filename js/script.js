// ===== MENU MOBILE =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("ativo");
        menuToggle.classList.toggle("aberto");
    });
}

// ===== LINK ATIVO NO MENU =====
const links = document.querySelectorAll("nav a");
const paginaAtual = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === paginaAtual) {
        link.classList.add("ativo");
    }
});

// ===== ANIMAÇÃO AO ROLAR =====
const elementos = document.querySelectorAll(".card, h1, h2, p");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(el => observer.observe(el));
