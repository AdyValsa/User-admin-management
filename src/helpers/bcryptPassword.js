const bcrypt = require("bcrypt")
const saltRounds = 10

const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password,saltRounds)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {hashPassword}