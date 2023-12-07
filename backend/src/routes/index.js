const router = require("express").Router();

router.use("/test", require("./test"));
router.use("/carbon", require("./carbon"));
router.use("/user", require("./user"));

module.exports = router;
