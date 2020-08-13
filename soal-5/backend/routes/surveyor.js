var express = require('express');
var router = express.Router();
const surveyorController = require("../Controllers/Surveyor")

router.post("/create", surveyorController.createData)
router.get("/show", surveyorController.getData)
router.get("/show/:surveyorId", surveyorController.getDataById)
router.put("/update/:surveyorId", surveyorController.updateDataById)
router.delete("/delete/:surveyorId", surveyorController.deleteDataById)

module.exports = router;
