const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
    
        // Desestruturando o body (objeto da requisisção)
    const { name, email, whatsapp, city, uf } = request.body;

    //usando crypto para gerar numero aleatorio
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    });

    return response.json({ id });
    }
}