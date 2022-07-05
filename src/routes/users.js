module.exports = (app) => {
  const create = async (req, res, next) => {
    try {
      const result = await app.services.user.save(req.body);
      return res.status(201).json(result[0]);
    } catch (err) {
      return next(err);
    }
  };

  const findAll = async (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };

  return { create, findAll };
};
