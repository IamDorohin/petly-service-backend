const getNoticesTitleSearch = require("./getNoticesTitleSearch");
const getNoticesByCategory = require("./getNoticesByCategory");
const getNoticeById = require("./getNoticeById");
const getNoticesByUser = require("./getNoticesByUser");
const getFavoriteNotices = require("./getFavoriteNotices");
const addNewNotice = require("./addNewNotice");
const addNoticeToFavorites = require("./addNoticeToFavorites");
const removeNoticeById = require("./removeNoticeById");
const removeNoticeFromFavorites = require("./removeNoticeFromFavorites");
const getFavoriteIdArr = require("./getFavoriteIdArr");

module.exports = {
  getNoticesTitleSearch,
  getNoticesByCategory,
  getNoticeById,
  getNoticesByUser,
  getFavoriteNotices,
  addNewNotice,
  addNoticeToFavorites,
  removeNoticeById,
  removeNoticeFromFavorites,
  getFavoriteIdArr,
};
