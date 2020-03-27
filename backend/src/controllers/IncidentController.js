const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        // Paginação para não retornar todos resultado de uma vez
        const { page = 1} = request.query;

        let [count] = await connection('incidents').count();

        let incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5) // Aqui faz o calculo de paginação
        .select([
         'incidents.*',
         'ongs.name', 
         'ongs.email', 
         'ongs.whatsapp', 
         'ongs.city', 
         'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']) // pegar o total e coloca no header do response

        return response.json(incidents);
    },

    async create(request, response ) {
        const  { title, description , value} = request.body;
        const ong_id = request.headers.authorization;

        // Posso pegar o id de duas formas crio uma const "result" e depois pego
        // o primeiro resultado do array result[0] ou desestruturo um array pra colocar 
        // para pegar a primeira possição renomear como 'id' fica assim [id]
        const [id] = await connection('incidents').insert({
             title, description , value, ong_id
        });

        response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        // Pegao id da ong pra se realmente aquele cara que est asendo deletado é daquela ong 
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id').first();

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error : 'Opration not permition'});
    
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },
}