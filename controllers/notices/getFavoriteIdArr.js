const getFavoriteIdArr = (req, res) => {
  const { favorite = [] } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      favorite,
    },
  });
};

module.exports = getFavoriteIdArr;
