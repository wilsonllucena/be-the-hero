Tipos de paramêtros

- Query Params: Parâmetros nomeados enviados na rota após "?" (filtros , Paginação)
- Route Params: Parâmetros utilizados para identificar recursos "/users"
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos "{"name": "Wilson Lucena"}"

Configuração importante 

app.use(express.json()) antes da crição de rota no nodejs
Com isso o express vai entender que body da requisição deve ser convertido json

Banco de dados 

- SQL LIte
- Query buider usada KNEX.JS


-- Analisando entidades

- ONG 
- Incidents 
- Users

- Funcionalidades
- Login de Ong
- Cadastro de ONG
- Logout ONG
- Delete casos
- Listar casos de uma ONG
- Lista todos os casos
- Entrar em contato por whatsapp e email

-- Migrations 
Criar tabelas e para manter um historico das tabelas que foram criadas


-- CRIANDO MIGRATIONS NO KNEX 

http://knexjs.org/#Migrations

npx knex migrate:make nome_migration 

npx  knex migrate:make create_ongs 

Executar migrations 

npx knex migrate:latest