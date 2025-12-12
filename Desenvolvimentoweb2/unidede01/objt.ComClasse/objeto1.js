class Livro {
     constructor(titulo, autor, ano) {
         this.titulo = titulo;
         this.autor = autor;
         this.ano = ano;
     }
     detalhes() {
         return `Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`;
     }
 }
 // Criei duas instâncias da classe Livro
 const livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
 const livro2 = new Livro("1984", "George Orwell", 1949);
 
 // Função para adicionar os detalhes do livro ao container no HTML
 function adicionarLivroAoHTML(livro, containerId) {
     const container = document.getElementById(containerId);
     const paragrafo = document.createElement("p"); // Cria um elemento <p>
     paragrafo.textContent = livro.detalhes(); // Define o texto do parágrafo
     container.appendChild(paragrafo); // Adiciona o parágrafo ao container
 }
 // Adicionando os detalhes dos livros ao container
 adicionarLivroAoHTML(livro1, "livrosContainer");
 adicionarLivroAoHTML(livro2, "livrosContainer");