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
            "Vermelho_2023_Sedan":    "jpg/aziravermelho.jpg",
            "Prata_2023_Sedan":    "jpg/aziraprata.jpg",
            "Branco_2023_Sedan":    "jpg/azirabranco.jpg",
            "Preto_2023_Sedan":    "jpg/320ipreta.jpg",
            
            
            "Vermelho_2023_Suv":   "jpg/urusvermelha.jpg",
            "Prata_2023_Suv":   "jpg/suvprataatt.jpg",
            "Branco_2023_Suv":   "jpg/urusbrancaatt.jpg",
            "Preto_2023_Suv":   "jpg/suvpreta.webp",
          
            
            "Vermelho_2023_Hatch":   "jpg/golfvermelhoatt.jpg",
            "Prata_2023_Hatch":   "jpg/poloprata.jpg",
            "Preto_2023_Hatch":   "jpg/golfpretoteste.jpg",
            "Branco_2023_Hatch":   "jpg/golfbrancoatt.jpg",
            
            "Vermelho_2023_Luxo":  "jpg/ferrarivermelhaatt.jpg",
            "Prata_2023_Luxo":  "jpg/luxoprata.webp",
            "Branco_2023_Luxo":  "jpg/ferraribranca.jpg",
            "Preto_2023_Luxo":  "jpg/ferraripretaatt.jpg",
        };

        let chave = `${corSelecionada}_${anoSelecionado}_${modeloSelecionado}`;
        if (imagens[chave]) {    
            window.location.href = `paginaFinal.html?imagem=${encodeURIComponent(imagens[chave])}`;
        }
    }
});
