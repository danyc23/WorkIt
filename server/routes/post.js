const express = require("express");
const controller = require("../controller/post");
const router = express.Router();

//creates a new post
router.route("/:id").post(controller.newPost);
router.route("/:id").get(controller.getPost);
router.route("/").get(controller.allPosts);

module.exports = router;
