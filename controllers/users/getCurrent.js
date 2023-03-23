const getCurrent = async (req, res) => {
    const { name, email, id } = req.user;
    
    res.json({
        status: "success",
        code: 200, 
        data: {
            user: {
                name,
                email,
                id
            }
        }
    })
}

module.exports = getCurrent;