const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const router = express.Router();

router.post('/ongs', async (req, res) => {
    const {name, email, whatsapp, city, uf} = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return res.json({id})
});

router.get('/ongs', async(req, res) =>{
    const ongs = await connection('ongs').select('*');

    return res.json({ongs})
})

module.exports = router;