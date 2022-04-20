module.exports = (app) => {
  app.route('/auth/register')
    .post(app.routes.user.create);
};
