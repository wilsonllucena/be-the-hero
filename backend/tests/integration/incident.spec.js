const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('CREATE NEW INCIDENT', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('Test create incident', async () => {
        
        const ong = connection('ongs').select('id').first();

        const response = await request(app)
            .post('/incidents')
            .set('Authorization', ong)
            .send({
                title: "Novo caso tets",
                description: "descrição do caso",
                value: "360.00"
        });

        expect(response.body).toHaveProperty('id')
    })
})