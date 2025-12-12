function manipularCarro() {
            // Criação do objeto literal carro
            const carro = {
                marca: "Fiat",
                modelo: "strada",
                ano: 2025,
                exibirInfo: function() {
                    return `Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`;
                }
            };

            // a) método de exibirInfo() e exibi no HTML
            document.getElementById("infoCarro").textContent = carro.exibirInfo();

            // b) Adiciona a cor
            carro.cor = "Vermelho";

            // c) Atualizei para 2025
            carro.ano = 2025;

            // d) Exibe o objeto completo no HTML
            document.getElementById("carroAtualizado").textContent = JSON.stringify(carro, null, 2);
        }
