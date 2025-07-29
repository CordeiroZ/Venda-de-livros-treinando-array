const elementoParaInserirLivros = document.getElementById('livros') // Pega o elemento HTML com id 'livros' onde os dados serão inseridos


// Esta função percorre a lista de livros e adiciona cada um na tela dentro do elemento HTML 'livros'
function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => { // Para cada livro na lista, executa o código abaixo
        elementoParaInserirLivros.innerHTML += `    
        <div class="livro">  
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}+" /> 
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
