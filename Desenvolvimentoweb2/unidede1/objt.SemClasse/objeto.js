function manipularCarro() {
            // Criação do objeto literal carro
            const carro = {
                marca: "Toyota",
                modelo: "Corolla",
                ano: 2020,
                exibirInfo: function() {
                    return `Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`;
                }
            };

            // a) Chama o método exibirInfo() e exibe no HTML
            document.getElementById("infoCarro").textContent = carro.exibirInfo();

            // b) Adiciona dinamicamente a propriedade cor
            carro.cor = "Preto";

            // c) Atualiza o valor de ano para 2025
            carro.ano = 2025;

            // d) Exibe o objeto completo no HTML
            document.getElementById("carroAtualizado").textContent = JSON.stringify(carro, null, 2);
        }
