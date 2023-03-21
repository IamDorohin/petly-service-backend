const { User } = require("../models");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;


const auth = async (req, res, next) => {
    // get header of authorization
    const { authorization = "" } = req.headers;
    // get values from authorization string
    const [bearer, token] = authorization.split(" ");
    
    try {
        
        if (bearer !== "Bearer") {
            throw new Unauthorized("Not authorized");
        }
        
        // check that token is valid
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        
        if (!user || !user.token) {
            throw new Unauthorized("Not authorized");
        }
        req.user = user;
        next();
    } catch (error) {
        if (error.message === "Invalid signature") {
            error.message = 401;
        }
        next(error);
    }

}

module.exports = auth;








   


