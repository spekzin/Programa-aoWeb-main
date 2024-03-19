document.getElementById("botaoConfirmar").addEventListener("click", function() {
    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;
    const aviso = document.getElementById("aviso");

    let imagens = {
        "Roxo_2020_Aventador": "jpg/aventadoroxa2020.avif",
        "Aventador_Preta": "jpg/aventadorpreta.webp",
        "Aventador_Verde": "jpg/aventadorverde.jpg"      
    };

    if (corSelecionada === "Cor" || anoSelecionado === "Ano" || modeloSelecionado === "Modelo") {
        event.preventDefault(); // Evita o envio do formulário
        aviso.style.display = "block"; // Mostra o aviso
        
    } else {
        let chave = `${corSelecionada}_${anoSelecionado}_${modeloSelecionado}`;
        if (imagens[chave]) {
            exibirImagem(imagens[chave]);
        }
    }
});

function exibirImagem(urlImagem) {
    // Cria um elemento img
    let img = document.createElement('img');
    // Define o atributo src com a URL da imagem
    img.src = urlImagem;
    // Adiciona a imagem ao corpo da página
    document.body.appendChild(img);
}
