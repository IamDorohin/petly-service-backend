const { User } = require('../../models');
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password, city, phone } = req.body;
   
    const user = await User.findOne({ email });
   
    if (user) {
        throw new Conflict(`User with ${email} already exist`);
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await User.create({ name, email, password: hashPassword, city, phone });

    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                name, 
                city,
                phone,  
            }
        }
    })
}


module.exports = register;