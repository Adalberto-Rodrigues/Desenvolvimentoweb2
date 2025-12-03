function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
  // 1. Converter os parâmetros para números
  rendaMensal = parseFloat(rendaMensal);
  dividaAtual = parseFloat(dividaAtual);

  // 2. Calcular a taxa de endividamento (TE)
  const TE = (dividaAtual / rendaMensal) * 100;

  // 3. Classificar o risco
  let risco;
  if (TE < 10) {
    risco = "Risco Baixo";
  } 
  else if (TE >= 10 && TE < 30) {
    risco = "Risco Moderado";
  }
   else {
    risco = "Risco Alto";
  }

  // 4. Retornar a mensagem
  return `O risco de crédito é: ${risco}`;
}

        // Exemplo de uso:
        const renda = 2000;
        const divida = 620;
        const resultado = avaliarRiscoDeCredito(renda, divida);

        // Exibir o resultado no elemento HTML
        document.getElementById("resultado").textContent = resultado;
