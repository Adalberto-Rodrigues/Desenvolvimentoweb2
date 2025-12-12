function avaliarRisco() {
    const renda = document.getElementById('renda').value;
    const divida = document.getElementById('divida').value;

    if (renda === '' || divida === '') {
        document.getElementById('resultado').textContent = 'Preencha os dois campos.';
        return;
    }

    const rendaNum = parseFloat(renda);
    const dividaNum = parseFloat(divida);
    const TE = (dividaNum / rendaNum) * 100;

    let risco;
    if (TE < 10) {
        risco = 'Risco Baixo';
    } else if (TE < 30) {
        risco = 'Risco Moderado';
    } else {
        risco = 'Risco Alto';
    }

    document.getElementById('resultado').textContent = `O risco de crédito é: ${risco}`;
}
