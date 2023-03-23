const { Notice } = require("../../models");
const { NotFound } = require("http-errors");
const sortNoticesByDate = require("../../helpers/sortNoticesByDate");

const getNoticesTitleSearch = async (req, res) => {
  const { search: query } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Notice.find({ title: { $search: query } }, "", {
    skip,
    limit: Number(limit),
  });

  if (result.length === 0) {
    throw new NotFound("There is no notices by your query");
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

module.exports = getNoticesTitleSearch;
