const app = require('express')();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'bem vindo a API!' });
});

app.post('/auth/register', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
