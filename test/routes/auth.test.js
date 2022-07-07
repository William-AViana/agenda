const request = require('supertest');
const app = require('../../src/app');

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
