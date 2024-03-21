document.getElementById("botaoConfirmar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const corSelecionada = document.getElementById("Cor").value;
    const anoSelecionado = document.getElementById("Ano").value;
    const modeloSelecionado = document.getElementById("Modelo").value;
    const aviso = document.getElementById("aviso");

    if (corSelecionada === "Cor" || anoSelecionado === "Ano" || modeloSelecionado === "Modelo") {
        aviso.style.display = "block"; // Mostra o aviso
    } else {
        let imagens = {
            "Roxo_2020_Aventador":    "jpg/aventadoroxa2020.avif",
            "Roxo_2021_Aventador":    "jpg/aventadoroxa2020.avif",
            "Roxo_2022_Aventador":    "jpg/aventadoroxa2020.avif",
            "Roxo_2023_Aventador":    "jpg/aventadoroxa2020.avif",
            "Roxo_2024_Aventador":    "jpg/aventadoroxa2020.avif",
            
            "Verde_2020_Aventador":   "jpg/aventadorverde.jpg",
            "Verde_2021_Aventador":   "jpg/aventadorverde.jpg",
            "Verde_2022_Aventador":   "jpg/aventadorverde.jpg",
            "Verde_2023_Aventador":   "jpg/aventadorverde.jpg",
            "Verde_2024_Aventador":   "jpg/aventadorverde.jpg",
            
            "Preto_2020_Aventador":   "jpg/aventadorpreta.webp",
            "Preto_2021_Aventador":   "jpg/aventadorpreta.webp",
            "Preto_2022_Aventador":   "jpg/aventadorpreta.webp",
            "Preto_2023_Aventador":   "jpg/aventadorpreta.webp",
            "Preto_2024_Aventador":   "jpg/aventadorpreta.webp",
            
            "Branco_2020_Aventador":  "jpg/aventadorbranca.jpg",
            "Branco_2021_Aventador":  "jpg/aventadorbranca.jpg",
            "Branco_2022_Aventador":  "jpg/aventadorbranca.jpg",
            "Branco_2023_Aventador":  "jpg/aventadorbranca.jpg",
            "Branco_2024_Aventador":  "jpg/aventadorbranca.jpg",
            
            "Branco_2020_Gallardo":   "jpg/gallardobranca.jpg",
            "Branco_2021_Gallardo":   "jpg/gallardobranca.jpg",
            "Branco_2022_Gallardo":   "jpg/gallardobranca.jpg",
            "Branco_2023_Gallardo":   "jpg/gallardobranca.jpg",
            "Branco_2024_Gallardo":   "jpg/gallardobranca.jpg",
            
            "Preto_2020_Gallardo":    "jpg/gallardopreta.jpg",
            "Preto_2021_Gallardo":    "jpg/gallardopreta.jpg",
            "Preto_2022_Gallardo":    "jpg/gallardopreta.jpg",
            "Preto_2023_Gallardo":    "jpg/gallardopreta.jpg",
            "Preto_2024_Gallardo":    "jpg/gallardopreta.jpg",
            
            "Verde_2020_Gallardo":    "jpg/gallardoverde.jpg",
            "Verde_2021_Gallardo":    "jpg/gallardoverde.jpg",
            "Verde_2022_Gallardo":    "jpg/gallardoverde.jpg",
            "Verde_2023_Gallardo":    "jpg/gallardoverde.jpg",
            "Verde_2024_Gallardo":    "jpg/gallardoverde.jpg",

            "Roxo_2020_Gallardo":     "jpg/gallardoroxa.jpg",
            "Roxo_2021_Gallardo":     "jpg/gallardoroxa.jpg",
            "Roxo_2022_Gallardo":     "jpg/gallardoroxa.jpg",
            "Roxo_2023_Gallardo":     "jpg/gallardoroxa.jpg",
            "Roxo_2024_Gallardo":     "jpg/gallardoroxa.jpg",
            
            "Branco_2020_SVJ":        "jpg/svjbranca.jpg",
            "Branco_2021_SVJ":        "jpg/svjbranca.jpg",
            "Branco_2022_SVJ":        "jpg/svjbranca.jpg",
            "Branco_2023_SVJ":        "jpg/svjbranca.jpg",
            "Branco_2024_SVJ":        "jpg/svjbranca.jpg",

            "Preto_2020_SVJ":         "jpg/svjpreta.jpg",
            "Preto_2021_SVJ":         "jpg/svjpreta.jpg",
            "Preto_2022_SVJ":         "jpg/svjpreta.jpg",
            "Preto_2023_SVJ":         "jpg/svjpreta.jpg",
            "Preto_2024_SVJ":         "jpg/svjpreta.jpg",

            "Verde_2020_SVJ":         "jpg/svjverde.jpg",
            "Verde_2021_SVJ":         "jpg/svjverde.jpg",
            "Verde_2022_SVJ":         "jpg/svjverde.jpg",
            "Verde_2023_SVJ":         "jpg/svjverde.jpg",
            "Verde_2024_SVJ":         "jpg/svjverde.jpg",

            "Roxo_2020_SVJ":          "jpg/svjroxa.webp",
            "Roxo_2021_SVJ":          "jpg/svjroxa.webp",
            "Roxo_2022_SVJ":          "jpg/svjroxa.webp",
            "Roxo_2023_SVJ":          "jpg/svjroxa.webp",
            "Roxo_2024_SVJ":          "jpg/svjroxa.webp",
           

            "Branco_2020_Urus":       "jpg/Urusbranca1.jpeg",
            "Branco_2021_Urus":       "jpg/Urusbranca1.jpeg",
            "Branco_2022_Urus":       "jpg/Urusbranca1.jpeg",
            "Branco_2023_Urus":       "jpg/Urusbranca1.jpeg",
            "Branco_2024_Urus":       "jpg/Urusbranca1.jpeg",
            
            "Preto_2020_Urus":        "jpg/uruspreta.jpg",
            "Preto_2021_Urus":        "jpg/uruspreta.jpg",
            "Preto_2022_Urus":        "jpg/uruspreta.jpg",
            "Preto_2023_Urus":        "jpg/uruspreta.jpg",
            "Preto_2024_Urus":        "jpg/uruspreta.jpg",
            
            "Verde_2020_Urus":        "jpg/urusverde.jpg",
            "Verde_2021_Urus":        "jpg/urusverde.jpg",
            "Verde_2022_Urus":        "jpg/urusverde.jpg",
            "Verde_2023_Urus":        "jpg/urusverde.jpg",
            "Verde_2024_Urus":        "jpg/urusverde.jpg",
            
            "Roxo_2020_Urus":         "jpg/urusroxa.jpg",
            "Roxo_2021_Urus":         "jpg/urusroxa.jpg",
            "Roxo_2022_Urus":         "jpg/urusroxa.jpg",
            "Roxo_2023_Urus":         "jpg/urusroxa.jpg",
            "Roxo_2024_Urus":         "jpg/urusroxa.jpg",
        };

        let chave = `${corSelecionada}_${anoSelecionado}_${modeloSelecionado}`;
        if (imagens[chave]) {    
            window.location.href = `paginaFinal.html?imagem=${encodeURIComponent(imagens[chave])}`;
        }
    }
});
