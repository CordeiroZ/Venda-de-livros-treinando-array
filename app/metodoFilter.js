// Seleciona todos os botões com a classe 'btn' no HTML
const botoes = document.querySelectorAll('.btn')

// Para cada botão encontrado, adiciona um evento de clique que chama a função 'filtrarLivros'
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Função que executa quando um botão é clicado
function filtrarLivros () {
    // Pega o elemento do botão clicado usando o ID dele (this.id refere-se ao botão clicado)
    const elementoBtn = document.getElementById(this.id)

    // Pega o valor do botão, que indica a categoria para filtrar (exemplo: 'fantasia', 'disponivel', etc)
    const categoria = elementoBtn.value

    // Se a categoria for 'disponivel', chama a função que filtra os livros disponíveis
    // Caso contrário, chama a função que filtra os livros pela categoria passada
    let livrosFiltrados = categoria == 'disponivel' 
        ? filtrarPorDisponibilidade() 
        : FiltrarPorCategoria(categoria)

    // Exibe os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados)

    // Se o filtro foi por livros disponíveis, exibe também o valor total deles na tela
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) 
    }
}

// Função que filtra os livros pela categoria recebida
function FiltrarPorCategoria(categoria) {
    // Retorna uma lista com os livros que têm a categoria igual ao parâmetro passado
    return livros.filter(livros => livros.categoria == categoria)
}

// Função que filtra os livros disponíveis (quantidade maior que 0)
function filtrarPorDisponibilidade() {
    // Retorna uma lista com os livros que têm quantidade > 0
    return livros.filter(livro => livro.quantidade > 0)
}

// Função que exibe o valor total dos livros disponíveis na tela
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    // Atualiza o conteúdo HTML do elemento responsável por mostrar o valor total
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =  `
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
