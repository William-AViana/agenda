const request = require('supertest');

const app = require('../src/app');

test('Deve inserir o usuário com sucesso', async () => {
  return request(app).post('/auth/register')
    .send({
      name: 'William',
      email: 'will@email.com',
      passworld: '1234',
      confirmPassworld: '1234',
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).not.toBeFalsy();
      expect(res.body.email).not.toBeFalsy();
      expect(res.body.passworld).not.toBeFalsy();
      expect(res.body.confirmPassworld).not.toBeFalsy();
    });
});
