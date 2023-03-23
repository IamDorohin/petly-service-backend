const getNoticesTitleSearch = require("./getNoticesTitleSearch");
const getNoticesByCategory = require("./getNoticesByCategory");
const getNoticeById = require("./getNoticeById");
const getNoticesByUser = require("./getNoticesByUser");
const getFavoriteNotices = require("./getFavoriteNotices");
const addNewNotice = require("./addNewNotice");
const addNoticeToFavorites = require("./addNoticeToFavorites");

module.exports = {
  getNoticesTitleSearch,
  getNoticesByCategory,
  getNoticeById,
  getNoticesByUser,
  getFavoriteNotices,
  addNoticeToFavorites,
};
