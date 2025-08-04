const elementoParaInserirLivros = document.getElementById('livros') // Pega o elemento HTML com id 'livros' onde os dados serão inseridos

// Esta função percorre a lista de livros e adiciona cada um na tela dentro do elemento HTML 'livros'
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '' // Limpa o conteúdo anterior
    listaDeLivros.forEach(livro => { // Para cada livro na lista, executa o código abaixo
       // let disponibilidade = verificarDisponiblidadeDoLivro(livro) // Verifica se o livro está disponível
       let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel' // operador ternario
        elementoParaInserirLivros.innerHTML += `    
        <div class="livro">  
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}+" /> 
            <h2 class="livro__titulo">${livro.titulo}</h2> 
            <p class="livro__descricao">${livro.autor}</p> 
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
            <div class="tags"> 
                <span class="tag">${livro.categoria}</span> 
            </div>
        </div>
        `
    })
}

// // Esta função verifica se o livro está disponível, retornando a classe CSS correta
// function verificarDisponiblidadeDoLivro(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens' // Se houver estoque, retorna a classe normal
//     } else { 
//         return 'livros__imagens indisponivel' // Se não houver estoque, adiciona a classe "indisponivel"
//     }
// }
