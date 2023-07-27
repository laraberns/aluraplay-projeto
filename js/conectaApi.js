// fetch na API e cria requisicao do tipo GET - são usadas para captar dados para a API
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

// fetch na API e cria requisicao do tipo POST - são usadas para enviar dados para a API
async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    // se conexao nao estiver ok, throw error
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

// funcao para busca dinamica
async function buscaVideos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

// salva e exporta funcoes na const conectaApi
export const conectaApi = {
    listaVideos,
    criaVideos,
    buscaVideos
}