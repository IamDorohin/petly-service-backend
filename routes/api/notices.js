const express = require("express");
const router = express.Router();

const { notices: ctrl } = require("../../controllers");
const {
  auth,
  validation,
  ctrlWrapper,
  upload,
  cloudinaryMiddleWar,
} = require("../../middleWares");

const { joiAddNoticeSchema } = require("../../models/notice");

router.get("/category/:category", ctrlWrapper(ctrl.getNoticesByCategory));
router.get("/notice/:noticeId", ctrlWrapper(ctrl.getNoticeById));
router.get("/category/own", auth, ctrlWrapper(ctrl.getNoticesByUser));
router.get("/category/favorite", auth, ctrlWrapper(ctrl.getFavoriteNotices));
router.post(
  "/notice",
  auth,
  upload.single("image"),
  validation(joiAddNoticeSchema),
  cloudinaryMiddleWar,
  ctrlWrapper(ctrl.addNewNotice)
);
router.post(
  "/favorite/:noticeId",
  auth,
  ctrlWrapper(ctrl.addNoticeToFavorites)
);
router.delete("/notice/:noticeId", auth, ctrlWrapper(ctrl.removeNoticeById));
router.delete(
  "/favorite/:noticeId",
  auth,
  ctrlWrapper(ctrl.removeNoticeFromFavorites)
);

module.exports = router;
