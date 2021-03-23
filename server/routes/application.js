const express = require("express");
const controller = require("../controller/applicant");
const router = express.Router();

router.route("/:id").post(controller.jobApplication);

module.exports = router;
