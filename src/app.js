const app = require('express')();
const consign = require('consign');
const knex = require('knex');
// const knexLogger = require('knex-logger');
const knexFile = require('../knexfile');

// TODO criar chaveamento dinâmico
app.db = knex(knexFile.test);

// app.use(knexLogger(app.db));

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'bem vindo a API!' });
});

module.exports = app;
