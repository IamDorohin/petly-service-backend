const { Notice } = require("../../models");
const { NotFound } = require("http-errors");
const sortNoticesByDate = require("../../helpers/sortNoticesByDate");

const getNoticesByUser = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Notice.find({ owner }, "", {
    skip,
    limit: Number(limit),
  }).sort({ createdAt: -1 });

  if (result.length === 0) {
    throw new NotFound("You do not have any notices");
  }

  const notices = sortNoticesByDate(result);

  res.json({
    status: "success",
    code: 200,
    data: {
      notices,
    },
  });
};

module.exports = getNoticesByUser;
