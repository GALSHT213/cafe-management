const router = require('express').Router();

const authController = require("./controllers/authController");
const tenantsController = require("./controllers/tenantsController");
const testController = require("./controllers/testController");

router.use("/api/auth", authController);
router.use("/api/tenants", tenantsController);
router.use("/api/test", testController);

module.exports = router;

