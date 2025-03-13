document.addEventListener("DOMContentLoaded", function () {
    function mostrarSecao(secao) {
        document.querySelectorAll('.secao').forEach(s => s.style.display = 'none');
        document.getElementById(secao).style.display = 'block';
    }

    window.mostrarSecao = mostrarSecao;

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que o clique no ícone feche o menu
        nav.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove("show"); // Fecha o menu ao clicar fora dele
        }
    });

   
});