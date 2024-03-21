document.addEventListener("DOMContentLoaded", function () { //DOMContentLoaded faz com que a pagina carregue toda pra depois executar algo
    const params = new URLSearchParams(window.location.search); //pegando os parametros da consulta, cor, ano e modelo
    const imagem = params.get("imagem"); // Estamos procurando por um parâmetro chamado "imagem" na página. Se existir, estamos guardando essa informação em uma variável chamada "imagem".
    if (imagem) {
        exibirImagem(imagem); //se encontrou imagem, exiba.
    }
});

function exibirImagem(urlImagem) {
    let img = document.createElement('img'); //Cria um novo elemento que sera exibida na pagina
    img.src = decodeURIComponent(urlImagem); // decodeURIComponent faz com q a imagem seja interpretada corretamente 
    img.classList.add("imagem-redirecionada");// So serve pra adicionar uma classe pra poder chamar no CSS
    document.body.appendChild(img);//adiciona a imagem ao corpo no HTML se tirar a imagem n aparece
}


