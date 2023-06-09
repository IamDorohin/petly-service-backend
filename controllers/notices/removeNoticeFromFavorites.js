const { User } = require("../../models/user");
const { NotFound } = require("http-errors");

const removeNoticeFromFavorites = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { noticeId } = req.params;
  const removeUserNotice = await User.findByIdAndUpdate(
    { _id: owner },
    { $pull: { favorite: noticeId } }
  );

  if (!noticeId) {
    throw new NotFound(
      "Sorry, notice does not exist or has been already removed"
    );
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Notice has been removed from favorites",
  });
};

module.exports = removeNoticeFromFavorites;
