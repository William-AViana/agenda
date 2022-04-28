module.exports = (app) => {
  const create = async (req, res) => {
    const result = await app.services.user.save(req.body);

    if (result.error) return res.status(400).json(result);

    return res.status(201).json(result[0]);
  };

  const findAll = async (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };

  return { create, findAll };
};
