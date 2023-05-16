const express = require("express");

const router = express.Router();

const { getAdmin, postAdmin } = require("../controllers/admin-controller");

router.get("/admin", getAdmin);

router.post("/admin", postAdmin);

module.exports = router;
