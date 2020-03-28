const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const AuthSessionController = require('./controllers/AuthSessionController')

const routes = express.Router();

/**
 * Fazendo valudação com "CELEBRATE" esta lib ajuda na validação da sua API a partir da rota 
 * Valida todos os dados que vem BODY, PARAMS, HEADERS , QUERY da sua requisição para API e 
 * retorna uma JSON com excption da validação mediante as configurações que foram feitas
 */

routes.post('/auth', AuthSessionController.auth);
routes.get('/ongs', OngController.index)


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);




module.exports = routes;