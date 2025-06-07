document.addEventListener("DOMContentLoaded", function() {
    let hoje = new Date().toISOString().split('T')[0];
    document.getElementById("data").value = hoje;
});

function calcularTotal() {
    let total = 0;
    document.querySelectorAll("table tr").forEach(row => {
        let quant = row.querySelector(".quant");
        let unit = row.querySelector(".unit");
        let subtotal = row.querySelector(".subtotal");
        if (quant && unit && subtotal) {
            let subTotalValue = (parseFloat(quant.value) || 0) * (parseFloat(unit.value) || 0);
            subtotal.value = subTotalValue.toFixed(2);
            total += subTotalValue;
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
