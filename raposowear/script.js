document.addEventListener("DOMContentLoaded", function () {
    function mostrarSecao(secao) {
        document.querySelectorAll('.secao').forEach(s => s.style.display = 'none');
        document.getElementById(secao).style.display = 'block';
    }

    window.mostrarSecao = mostrarSecao;

    // Initially show the 'blog' section
    mostrarSecao('blog');

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents clicking the icon from closing the menu
        nav.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove("show"); // Closes the menu when clicking outside of it
        }
    });
});
