const { User } = require("../../models");


const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    // res.status(204).json();
     res.json({
        status: "success",
        code: 200,
        data: {message: `user is logout`}
    })
}


module.exports = logout;

