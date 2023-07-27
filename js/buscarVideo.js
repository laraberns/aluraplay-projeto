import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js"

// funcao para buscar os videos de acordo com texto
async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value

    // utiliza os dados do campo de pesquisa na funcao buscaVideo da conectaApi
    const busca = await conectaApi.buscaVideos(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]")

    // enquanto lista tiver primeiro filho, ele sera removido. fica em um looping removendo sempre o primeiro filho até ficar vazia 
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    // para cada videos buscados cria um elemento filho na lista com a funcao constroiCard 
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    // se a busca for resultado 0, aparece mensagem na tela
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com o termo "${dadosDePesquisa}"</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

// quando botao for clicado, aciona a funcao buscarVideo
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento))
