const express = require("express");
const router = express.Router();

const feedService = require("../services/FeedServices.js");
router.get("/", feedService.getFeed);

module.exports = router;
