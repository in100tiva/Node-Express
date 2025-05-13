const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        email: 'contato@hotmail.com',
        telefone: '(85) 99140-1345'
    })
})

module.exports = router