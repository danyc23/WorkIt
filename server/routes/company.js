const express = require("express");
const controller = require("../controller/company");
const router = express.Router();

router.route("/").post(controller.newCompany);

router.route("/:id").get(controller.getCompanyWithPost);

module.exports = router;
