const sortNoticesByDate = (notices) => {
  const sortNotices = [...notices].sort(
    (firstNotice, secondNotice) =>
      new Date(secondNotice.createdAt) - new Date(firstNotice.createdAt)
  );

  return sortNotices;
};

module.exports = sortNoticesByDate;
