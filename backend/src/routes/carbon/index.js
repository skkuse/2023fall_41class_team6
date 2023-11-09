const router = require("express").Router();
const ctrl = require("./carbon.ctrl");

router.post("/", ctrl.get_carbon);
router.get("/server-loc", ctrl.get_server_loc);

module.exports = router;
