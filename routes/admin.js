const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin-controller");

router.get("/add-dish", adminController.getAddDish);

module.exports = router;
