module.exports = (app) => {
  const save = (account) => {
    return app.db('accounts').insert(account, '*');
  };

  const getAll = () => {
    return app.db('accounts');
  };

  return { save, getAll };
};
