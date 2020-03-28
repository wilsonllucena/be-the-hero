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

--- RECAT 

useEffect = DISPARA UMA FUNÇÃO DENTRO DE UM DETERMINADO COMPONENT
useState = Usa se sempre o estado component para gravar alguma alteração na aplicação

-- REACT NATIVE 

sudo npm install -g expo-cli

CRIANDO UM PROJETO EXPO

expo init mobile

não exit herança de estilo no React Native

para criar rotas no React Native use 

https://reactnavigation.org/docs/getting-started

npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Navegação por botoes ou link Stack Navigation

npm install @react-navigation/stack

