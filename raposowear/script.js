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



document.addEventListener("DOMContentLoaded", () => {
    let hoje = new Date().toISOString().split('T')[0];
    document.getElementById("data").value = hoje;

    const tbody = document.getElementById("tabela-itens");
    for (let i = 0; i < 15; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><input type="number" class="quant" oninput="calcularTotal()"></td>
            <td><input type="text"></td>
            <td><input type="number" class="unit" oninput="calcularTotal()"></td>
            <td><input type="number" class="subtotal" readonly></td>
        `;
        tbody.appendChild(tr);
    }
});

function calcularTotal() {
    let total = 0;
    document.querySelectorAll("#tabela-itens tr").forEach(row => {
        let quant = row.querySelector(".quant");
        let unit = row.querySelector(".unit");
        let subtotal = row.querySelector(".subtotal");
        if (quant && unit && subtotal) {
            let sub = (parseFloat(quant.value) || 0) * (parseFloat(unit.value) || 0);
            subtotal.value = sub.toFixed(2);
            total += sub;
        }
    });
    document.getElementById("total").innerText = total.toFixed(2);
}

function gerarImagem() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `${document.getElementById('cliente').value || 'recibo'}.png`;
        link.click();
    });
}

