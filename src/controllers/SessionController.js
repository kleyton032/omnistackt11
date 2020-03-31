const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if (!ong) return res.status(400).send({ error: "Não existe ONG com ID informado" });

        return res.send({ ong })
    }
}