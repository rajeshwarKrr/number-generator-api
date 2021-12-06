const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { useTryCatch } = require("../../common/helper.util");

router.get("/profile", useTryCatch(userController.profile));

router.get("/next", useTryCatch(userController.next));
router.get("/current", useTryCatch(userController.current));

router.put("/current", useTryCatch(userController.resetCurrent));

module.exports = router;
