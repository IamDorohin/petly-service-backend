const getCurrent = async (req, res) => {
  const { name, email, id, token } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name,
        email,
        id,
      },
    },
    token,
  });
};

module.exports = getCurrent;
