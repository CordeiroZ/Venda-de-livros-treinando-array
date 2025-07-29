let livros = [] // Cria uma variável global vazia chamada 'livros' para armazenar os dados que virão da API

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' // URL da API com os dados dos livros

getBuscarLivrosDaApi() // Chama a função que busca os livros assim que o script é executado

// Esta função faz a requisição na API, recebe os dados, converte para JSON e chama a função que exibe os livros
async function getBuscarLivrosDaApi() {
    const resposta = await fetch(endpointDaAPI) // Faz uma requisição assíncrona para a API e espera a resposta
    livros = await resposta.json() // Converte a resposta da API (JSON) para um objeto JavaScript e salva em 'livros'
    let livrosComDesconto = aplicarDesconto (livros)
    exibirOsLivrosNaTela(livrosComDesconto) // Chama a função que insere os livros no HTML
}


