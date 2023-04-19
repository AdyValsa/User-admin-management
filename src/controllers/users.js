const jwt =  require('jsonwebtoken');

const { hashPassword } = require("../helpers/bcryptPassword");
const dev = require('../config');
const sendEmailWithNodeMailer = require('../helpers/sendMail');
/* const User = require('../models/users');
 */
const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.fields
        if (!name || !email || !password || !phone) {
        return res.status(404).json({
            message: "something is missing"
        })}
        if (password.length < 6 ) {
            return res.status(404).json({
                message: "Password length must be at least 6"
            })}

/*         const userExists = await User.findOne({email:email})
         if (userExists) {
            return res.status(404).json({
                message: "User with this email already exists"
            })
        }  */
 
        const hashedPassword = await hashPassword(password)

        const token = jwt.sign({name,email,hashedPassword,phone}, dev.app.jwtUserKey, {expiresIn: "10m"})
 
        const emailData = {
            email,
            subject: "Account activation email",
            html: `
            <h2> Hello ${name}!</h2>
            <p>Please click <a href="${dev.app.clientUrl}/api/users/activate/${token}" target="_blank">THIS</a> to activate your account</p>`
        } 

        sendEmailWithNodeMailer(emailData)



        res.status(200).json({
            token,
            message: "user is created"
        })
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}

const saveUser = (req,res) => {
    try {
        console.log(req.params.token)
    } catch (error) {
        
    }

}

module.exports = {registerUser, saveUser}