module.exports = (app) => {
  app.route('/auth/register')
    .post(app.routes.users.create);

  app.route('/users')
    .get(app.routes.users.findAll);
};
