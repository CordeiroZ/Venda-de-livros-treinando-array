// Esta parte seleciona todos os botões com a classe 'btn' e adiciona um evento de clique para cada um, que chama a função 'filtrarLivros' quando clicado.
const botoes = document.querySelectorAll('.btn') // Seleciona todos os elementos do HTML que têm a classe 'btn' e guarda na constante 'botoes'
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) // Para cada botão encontrado, adiciona um ouvinte de evento que chama a função 'filtrarLivros' quando o botão for clicado

// Esta função é responsável por filtrar os livros de acordo com a categoria do botão clicado.
// Quando o usuário clica em um botão, ela pega a categoria do botão e filtra os livros que pertencem a essa categoria.
function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id) // Pega o elemento do botão clicado usando o ID do botão (this.id)

    const categoria = elementoBtn.value // Pega o valor do botão (geralmente definido no HTML com o atributo value), que representa a categoria que será usada no filtro

    let livrosFiltrados = livros.filter(livros => livros.categoria == categoria) // Filtra o array 'livros' para pegar só os livros que têm a mesma categoria do botão clicado

    console.table(livrosFiltrados) // Exibe os livros filtrados no formato de tabela no console do navegador
}



