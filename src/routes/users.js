module.exports = (app) => {
<<<<<<< HEAD
  const create = async (req, res) => {
=======
  const create = async (req, res, next) => {
>>>>>>> bug-fix
    try {
      const result = await app.services.user.save(req.body);
      return res.status(201).json(result[0]);
    } catch (err) {
<<<<<<< HEAD
      return res.status(400).json({ error: err.message });
=======
      return next(err);
>>>>>>> bug-fix
    }
  };

  const findAll = async (req, res, next) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => next(err));
  };

  return { create, findAll };
};
