const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu site!');
})

app.get('/sobre', (req, res) => {
    res.send('Esta é a página sobre nós.');
})

app.get('/contato', (req, res) => {
    res.send('Entre em contato pelo email: Projetoin100tiva@gmail.com');
})

app.get('/api/usuario', (req, res) => {
    res.json({
        "id": 0,
        "nome": "luan",
        "idade": 27,
        "email": "luanpdd@hotmail.com"
    });
});

app.get('/inspecionar', (req, res) => {
    console.log('Nova requisição');
    console.log('metodo', req.method);
    console.log('URL', req.url);
    console.log('cabeçalhos', req.headers);   

    res.send('Requisição recebida! veja o terminal.')
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})

