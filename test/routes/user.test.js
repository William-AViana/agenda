const request = require('supertest');

const app = require('../../src/app');

const email = `${Date.now()}@email.com`;

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve inserir o usuário com sucesso', () => {
  return request(app).post('/users')
    .send({
      name: 'William',
      email,
      password: '1234',
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('William');
      expect(res.body).not.toHaveProperty('password');
    });
});

test('Deve armazenar senha criptografada', async () => {
  const res = await request(app).post('/users')
    .send({
      name: 'William',
      email: `${Date.now()}@email.com`,
      password: '1234',
    });
  expect(res.status).toBe(201);

  const { id } = res.body;
  const userDB = await app.services.user.findOne({ id });
  expect(userDB.password).not.toBeUndefined();
  expect(userDB.password).not.toBe('1234');
});

test('Não deve inserir usuário sem nome', () => {
  return request(app).post('/users')
    .send({ email: 'will@email.com', password: 1234 })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome é um atributo obrigatório');
    });
});

test('Não deve inserir usuário sem email', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'William', password: 1234 });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Email é um atributo obrigatório');
});

test('Não deve inserir usuário sem senha', (done) => {
  request(app).post('/users')
    .send({ name: 'William', email: 'will@email.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é um atributo obrigatório');
      done();
    })
    .catch((err) => done.fail(err));
});

test('Não deve inserir uauário com email existente', () => {
  return request(app).post('/users')
    .send({ name: 'William', email, password: 1234 })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Já existe usuário com esse email');
    });
});
