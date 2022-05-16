module.exports = (app) => {
  const save = (account) => {
    return app.db('accounts').insert(account, '*');
  };

  const getAll = () => {
    return app.db('accounts');
  };

  const find = (filter = {}) => {
    return app.db('accounts').where(filter).first();
  };

  const update = (id, account) => {
    return app.db('accounts')
      .where({ id })
      .update(account, '*');
  };

  return {
    save, getAll, find, update,
  };
};
