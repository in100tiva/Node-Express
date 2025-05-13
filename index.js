const express = require('express');
const app = express();
const PORT = 3000;

const homeRoutes = require('./routes/homeRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const contatoRoutes = require('./routes/contatoRoutes');

app.use((req, res, next) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);

    next()
});

app.use('/', homeRoutes);
app.use('/cursos', cursosRoutes);
app.use('/contato', contatoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})