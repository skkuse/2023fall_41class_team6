const router = require("express").Router();

router.use("/test", require("./test"));
router.use("/carbon", require("./carbon"));

module.exports = router;
