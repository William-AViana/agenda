module.exports = (app) => {
  app.route('/users')
    .post(app.routes.users.create);

  app.route('/users')
    .get(app.routes.users.findAll);
};
