require("dotenv").config();

const dev = {
    app: {
        serverPort: process.env.SERVER_PORT || 3001,
        jwtUserKey: process.env.JWT_USER_KEY || "AIOSHDIUHASDKJABSDK",
        smtpPass: process.env.SMTP_PASS,
        smtpUser: process.env.SMTP_USER,
        clientUrl: process.env.CLIENT_URL
    },
    db: {
        url: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/user-admin-db",
    }
};
 
module.exports = dev;