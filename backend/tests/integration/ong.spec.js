const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('CREATE ONG', () => {

    /**
     * beforEach esta função vai ser excutada antes de prencher o banco
     */
     beforeEach(async () => {
         await connection.migrate.rollback(); 
         await connection.migrate.latest(); // Rodar as migration no amabient de test
     })

     // depois de todos os testes fecha a conexão com banco test
     afterAll(async () => {
         await connection.destroy()
     })

  
    it("Test create new ONG", async () => {
        //usando supertest para acessar a api
        const response =  await request(app)
            .post('/ongs')
            .send({
                name: "ONG VIDA",
                email: "email@ongvida.com",
                whatsapp: "613395632",
                city: "Brasilia",
                uf:"DF"
            });

        expect(response.body).toHaveProperty('id') // Espero receber uma propriedade 'id'
        expect(response.body.id).toHaveLength(8) // Espero qu eo id tenha tamanho 8
    })


})

