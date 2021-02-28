const express = require("express");
const controller = require("../controller/company");
const router = express.Router();
//create new company
router.route("/").post(controller.newCompany);
//getting a company with its posts
router.route("/:id").get(controller.getCompanyWithPost);
// login a company
router.route("/login").post(controller.logInCompany);

module.exports = router;
