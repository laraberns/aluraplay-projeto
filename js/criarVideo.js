// importa const conectaApi
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]")

// funcao para captar dados digitados
async function criarVideo(evento) {
    evento.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value

    const descricao = Math.floor(Math.random() * 10).toString()

    // conecta dados digitados com funcao criaVideos para dar o Post na API
    try {
        await conectaApi.criaVideos(titulo, descricao, url, imagem)

        // feedback que envio foi concluido
        window.location.href = "../pages/envio-concluido.html"
    }     // pega mensagem de Error e imprime
    catch (e) {
        alert(e)
    }
}

// capta evento depois de clicado o botao de submit
formulario.addEventListener("submit", evento => criarVideo(evento))