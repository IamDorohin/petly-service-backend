const { User } = require("../../models");
const { Notice } = require("../../models");
const { NotFound, Conflict } = require("http-errors");

const addNoticeToFavorites = async (req, res) => {
  const { noticeId } = req.params;
  const { id: userId } = req.user;
  

  const notice = await Notice.findById(noticeId);
  const result = await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { favorite: noticeId } }
  );

  if (!notice) {
    throw new NotFound(
      "Sorry, notice does not exist or has been already removed"
    );
  }

  if (result.favorite.includes(noticeId)) {
    throw new Conflict(
      "This notice has been already added to the list of favorites"
    );
  }

  res.json({
    status: "success",
    code: 200,
    message: "Notice has been successfully added to the list of favorites",
  });
};

module.exports = addNoticeToFavorites;
