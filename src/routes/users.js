const router = require("express").Router();

const { userRegistration } = require("../controllers/users");

router.post("/register", userRegistration)

module.exports = router