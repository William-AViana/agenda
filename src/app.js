const app = require('express')();
const consign = require('consign');
const knex = require('knex');

const knexFile = require('../knexfile');

// TODO criar chaveamento dinâmico
app.db = knex(knexFile.test);

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'bem vindo a API!' });
});

module.exports = app;
