function calcular() {
            const numerosInput = document.getElementById("numerosInput").value;
            const numeros = numerosInput.split(",").map(Number);

            document.getElementById("numerosDigitados").textContent = numeros.join(", ");

            const maximo = Math.max(...numeros);
            document.getElementById("maiorValor").textContent = maximo;

            const minimo = Math.min(...numeros);
            document.getElementById("menorValor").textContent = minimo;

            const dobro = numeros.map(numero => numero * 2);
            document.getElementById("dobroNumeros").textContent = dobro.join(", ");

            const maioresQue5 = numeros.filter(numero => numero > 5);
            document.getElementById("maioresQue5").textContent = maioresQue5.join(", ");
        }