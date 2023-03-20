const { OurFriend } = require('../../models');

const getListOfFriends = async (req, res) => {
    const result = await OurFriend.find({});
    res.json({
        status: "succes",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getListOfFriends;