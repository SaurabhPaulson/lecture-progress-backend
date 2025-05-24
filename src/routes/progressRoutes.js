const express = require("express");
const { saveProgress, getProgress } = require("../controllers/progressController");
const router = express.Router();

router.post("/", saveProgress);
router.get("/:userId/:videoId", getProgress);

module.exports = router;