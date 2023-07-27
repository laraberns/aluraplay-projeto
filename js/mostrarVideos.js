// importa const conectaApi que guarda funcao listaVideos()
import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

// funcao para criar a li com texto - itens
export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `
    return video
}

// funcao para consumir dados da funcao listaVideos()
async function listaVideo() {
    try {
        const listaApi = await conectaApi.listaVideos()

        // para cada elemento da listaApi cria um filho (card) com a funcao constroiCard utilizando os dados da Api como titulo, descricao, url
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    }
    // se nao for possivel carregar a lista de videos - url errada por exemplo
    catch {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de vídeos ): </h2>`
    }
}

// mostrar itens na tela
listaVideo()