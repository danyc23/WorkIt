const express = require("express");
const controller = require("../controller/post");
const router = express.Router();

//creates a new post
router.route("/:id").post(controller.newPost);

module.exports = router;
