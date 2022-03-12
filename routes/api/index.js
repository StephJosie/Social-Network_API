const router = require("express").Router();
const usersRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes")

router.use("/user", usersRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;