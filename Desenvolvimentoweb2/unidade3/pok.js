async function buscarDados() {
    const nome = document.getElementById('searchInput').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`;

    try {
        const resposta = await fetch(apiUrl);
        const dados = await resposta.json();

        let resultadoHTML = `
            <h2>${dados.name}</h2>
            <img src="${dados.sprites.front_default}" alt="Imagem de ${dados.name}">
            <p>Altura: ${dados.height}</p>
            <p>Peso: ${dados.weight}</p>
        `;

        document.getElementById('resultado').innerHTML = resultadoHTML;
    } catch (erro) {
        document.getElementById('resultado').innerHTML = 'Erro ao buscar dados.';
        console.error(erro);
    }
}