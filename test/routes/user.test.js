const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', async () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve inserir o usuário com sucesso', async () => {
  const email = `${Date.now()}@email.com`;
  return request(app).post('/auth/register')
    .send({
      name: 'William',
      email,
      passworld: '1234',
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).not.toBeFalsy();
      expect(res.body.email).not.toBeFalsy();
      expect(res.body.passworld).not.toBeFalsy();
    });
});
