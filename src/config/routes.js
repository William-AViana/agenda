module.exports = (app) => {
  app.route('/auth/signin')
    .post(app.routes.auth.signin);

  app.route('/users')
    .post(app.routes.users.create);

  app.route('/users')
    .get(app.routes.users.findAll);

  app.route('/accounts')
    .get(app.routes.accounts.getAll)
    .post(app.routes.accounts.create);

  app.route('/accounts/:id')
    .get(app.routes.accounts.get)
    .put(app.routes.accounts.update)
    .delete(app.routes.accounts.remove);
};
