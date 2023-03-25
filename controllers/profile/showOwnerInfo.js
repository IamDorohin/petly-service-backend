const showOwnerInfo = async (req, res) => {
  const { email, name, birthday, city, phone } = req.user;
    res.status(200).json({
        name,
        email,
        birthday,
        phone,
        city,
  });
};

module.exports = showOwnerInfo;