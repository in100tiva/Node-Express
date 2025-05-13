const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {nome: 'Programação Web', descricao: 'Aprenda a fazer um site'},
        {nome: 'UX Design', descricao: 'Aprenda UX'},
        {nome: 'Markting Digital', descricao: 'Aprenda a vender alguma coisa.'}
    ])
})

module.exports = router