const router = require("express").Router();
const servicesRoutes = require("./services");

// Book routes
router.use("/services", servicesRoutes);

module.exports = router;
