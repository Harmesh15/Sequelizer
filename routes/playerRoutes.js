const express = require("express");
const router = express.Router();
const playerController = require("../controller/playerController");

router.post("/add",playerController.addEntries);
router.put("/update/:id",playerController.updateEntries);
router.delete("/delete/:id",playerController.deleteEntries);


module.exports = router;