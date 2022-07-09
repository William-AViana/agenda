const request = require('supertest');
const app = require('../../src/app');

test('Deve criar o usuário via signup', () => {
  return request(app).post('/auth/signup')
    .send({
      name: 'William',
      email: `${Date.now()}@email.com`,
      password: '1234',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('William');
      expect(res.body).toHaveProperty('email');
      expect(res.body).not.toHaveProperty('password');
    });
});

test('Deve receber token ao logar', () => {
  const email = `${Date.now()}@email.com`;
  return app.services.user.save({
    name: 'William',
    email,
    password: '1234',
  }).then(() => request(app).post('/auth/signin')
    .send({
      email, password: '1234',
    }))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
});

test('Não deve autenticar usuário com senha inválida.', () => {
  const email = `${Date.now()}@email.com`;
  return app.services.user.save({
    name: 'William',
    email,
    password: '1234',
  }).then(() => request(app).post('/auth/signin')
    .send({
      email, password: '4321',
    }))
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Usuário ou senha inválido!');
    });
});

test('Não deve authenticar usuário com email inválido.', () => {
  return request(app).post('/auth/signin')
    .send({ email: 'naoexiste@email.com', password: '4321' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Usuário ou senha inválido!');
    });
});

test('Não deve acessar uma rota protegida sem token.', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(401);
    });
});
