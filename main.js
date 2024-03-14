
document.getElementById("botaoConfirmar").addEventListener("click", function() {
    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;

    if (corSelecionada === "" || anoSelecionado === "" || modeloSelecionado === "") {
        alert("Por favor, selecione Cor, Ano e Modelo antes de confirmar.");
    } else {
        alert("Seleção confirmada!");
    }
});

