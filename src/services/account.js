module.exports = (app) => {
  const save = async (account) => {
    if (!account.name) return { error: 'Nome é um atributo obrigatório' };

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

  const remove = (id) => {
    return app.db('accounts')
      .where({ id })
      .del();
  };

  return {
    save, getAll, find, update, remove,
  };
};
