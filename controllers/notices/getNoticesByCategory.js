const { Notice } = require("../../models");
const { NotFound } = require("http-errors");
const sortNoticesByDate = require("../../helpers/sortNoticesByDate");

const getNoticesByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Notice.find({ category }, "", {
    skip,
    limit: Number(limit),
  });

  if (result.length === 0 || !category) {
    throw new NotFound("There is no notices in this category");
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

module.exports = getNoticesByCategory;
