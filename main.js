
document.getElementById("botaoConfirmar").addEventListener("click", function() {
    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;

    if (corSelecionada === "" || anoSelecionado === "" || modeloSelecionado === "") {
        event.preventDefault(); //Evita o envio do formulario
        aviso.style.display = "block"; // Mostra o Aviso

    } else{
        aviso.style.display = "none"; //Esconde o aviso caso tudo esteja preenchido
    }
};
