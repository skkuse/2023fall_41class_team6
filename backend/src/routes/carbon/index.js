const router = require("express").Router();
const ctrl = require("./carbon.ctrl");

router.post("/", ctrl.get_carbon);
router.get("/ranking", ctrl.get_ranking);

module.exports = router;
