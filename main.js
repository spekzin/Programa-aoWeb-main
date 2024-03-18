
document.getElementById("botaoConfirmar").addEventListener("click", function() {
    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;
    const aviso = document.getElementById("aviso");

    if (corSelecionada === "Cor" || anoSelecionado === "Ano" || modeloSelecionado === "Modelo") {
        event.preventDefault(); // Evita o envio do formulário
        aviso.style.display = "block"; // Mostra o aviso
    } else {
        window.location.href = asdasd.html;

    }
});
