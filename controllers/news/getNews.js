const { News } = require('../../models');

const getNews = async (req, res) => {
    const result = await News.find({});
    res.json({
        status: "succes",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getNews;