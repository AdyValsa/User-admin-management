const userRegistration = (req,res) => {
    try {
        console.log(req.body)
        res.status(200).json({
            message: "user is created"
        })
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}

module.exports = {userRegistration}