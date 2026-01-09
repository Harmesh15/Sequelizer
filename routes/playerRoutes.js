const express = require("express");
const router = express.Router();
const playerController = require("../controller/playerController");

router.post("/add",playerController.addEntries);


module.exports = router;