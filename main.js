document.getElementById("botaoConfirmar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;

    let imagens = {
        "Roxo_Aventador":    "jpg/aventadoroxa2020.avif",
        "Verde_Aventador":   "jpg/aventadorverde.jpg",
        "Preto_Aventador":   "jpg/aventadorpreta.webp",
        "Branca_Aventador":  "jpg/aventadorbranca.jpg",
        "Branca_Gallardo":   "jpg/gallardobranca.jpg",
        "Preta_Gallardo ":   "jpg/gallardopreta.jpg",
        "Verde_Gallardo":    "jpg/gallardoverde.jpg",
        "Roxa_Gallardo":     "jpg/gallardoroxa.jpg",
        "svj_branca":        "jpg/svjbranca.jpg",
        "svj_preta":         "jpg/svjpreta.jpg",
        "svj_verde":         "jpg/svjverde.jpg",
        "svj_roxa":          "jpg/svjroxa.webp",
        "Urus_Branca":       "jpg/Urusbranca1.jpeg",
        "Urus_Preta":       "jpg/uruspreta.jpg",
        "Urus_Verde":       "jpg/urusverde.jpg",
        "Urus_Roxa":        "jpg/urusroxa.jpg",
    };

    let chave = `${corSelecionada}_${anoSelecionado}_${modeloSelecionado}`;
    if (imagens[chave]) {
        window.location.href = `paginaFinal.html?imagem=${encodeURIComponent(imagens[chave])}`;
    }
});
