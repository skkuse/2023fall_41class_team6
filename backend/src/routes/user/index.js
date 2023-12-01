const router = require("express").Router();
const ctrl = require("./user.ctrl");

router.get("/login", ctrl.login);

module.exports = router;
