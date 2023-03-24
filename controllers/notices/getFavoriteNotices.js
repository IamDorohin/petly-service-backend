const { User } = require("../../models");
const { NotFound } = require("http-errors");
const sortNoticesByDate = require("../../helpers/sortNoticesByDate");

const getFavoriteNotices = async (req, res) => {
  const { _id: userId } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const currentUserFavoriteNotices = await User.findOne({ _id: userId }, "", {
    skip,
    limit: Number(limit),
  }).populate("favorite");

  const currentUserFavoriteId = await User.findOne({ _id: userId });

  const result = currentUserFavoriteNotices.favorite;
  const favorite = currentUserFavoriteId.favorite;

  if (result.length === 0) {
    throw new NotFound("Sorry, you do not have favorite notices");
  }
  if (favorite.length === 0) {
    throw new NotFound("Sorry, you do not have favorite notices");
  }

  const notices = sortNoticesByDate(result);

  res.json({
    status: "success",
    code: 200,
    data: {
      notices,
      favorite,
    },
  });
};

module.exports = getFavoriteNotices;
