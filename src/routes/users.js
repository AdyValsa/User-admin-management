const formidable = require("express-formidable")
const router = require("express").Router();

const { registerUser, saveUser } = require("../controllers/users");

router.post("/register",formidable(), registerUser)
router.post("/activate",formidable(), saveUser)

module.exports = router 