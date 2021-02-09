const express = require("express");
const controller = require("../controller/company");
const router = express.Router();

router.route("/").post(controller.newCompany);

module.exports = router;
