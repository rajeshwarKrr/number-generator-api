const router = require("express").Router();
const { useTryCatch } = require("../../common/helper.util");

const authController = require("../controllers/auth.controller");

router.post("/register", useTryCatch(authController.register));
router.post("/login", useTryCatch(authController.login));

module.exports = router;
