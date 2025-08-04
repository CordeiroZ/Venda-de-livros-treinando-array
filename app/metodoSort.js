// Essa função ordena os livros do menor para o maior preço e exibe na tela
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco') // Seleciona o botão de ordenar pelo ID
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco) // Adiciona evento de clique ao botão

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco) // Ordena o array de livros do menor para o maior preço
  exibirOsLivrosNaTela(livrosOrdenados) // Exibe os livros ordenados na tela
}
