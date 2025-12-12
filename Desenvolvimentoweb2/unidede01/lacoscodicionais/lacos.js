function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const tamanho = palavra.length;
    const ehPalindromo = palavra.toLowerCase() === palavra.toLowerCase().split('').reverse().join('');

    document.getElementById("tamanhoPalavra").textContent = `Tamanho da palavra: ${tamanho}`;
    document.getElementById("ehPalindromo").textContent = ehPalindromo ? "É um palíndromo" : "Não é um palíndromo";
}