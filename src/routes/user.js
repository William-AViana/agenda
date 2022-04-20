module.exports = () => {
  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { create };
};
