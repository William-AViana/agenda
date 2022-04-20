const request = require('supertest');

const app = require('../src/app');

test('Deve inserir o usuário com sucesso', () => {
  return request(app).post('/auth/register')
    .send({ name: 'William', email: 'will@email.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('William');
    });
});
