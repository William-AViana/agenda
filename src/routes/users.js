module.exports = (app) => {
  const create = async (req, res) => {
    const result = await app.db('users').insert(req.body, '*');
    res.status(201).json(result[0]);
  };

  const findAll = async (req, res) => {
    app.db('users').select()
      .then((result) => res.status(200).json(result));
  };

  return { create, findAll };
};
