const router = require("express").Router();
const ctrl = require("./carbon.ctrl");

router.post("/", ctrl.get_carbon);

module.exports = router;
