const express = require('express');
const app = express();
const port = 3000;

// 1. Rota com parâmetro de rota
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

// 2. Rota com parâmetros de query
app.get('/soma', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parâmetros "a" e "b" devem ser números.' });
  }

  const soma = a + b;
  res.json({
    a: a,
    b: b,
    soma: soma
  });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});