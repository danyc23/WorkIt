const express = require("express");
const controller = require("../controller/applicant");
const router = express.Router();
const multer = require("multer");

const upload = multer();

router.route("/:id").post(upload.single("resume"), controller.jobApplication);

module.exports = router;
