var express = require('express');
var router = express.Router();
const adminController = require("../Controllers/Admin")

router.post("/create", adminController.create)
router.get("/show", adminController.getAllData)

module.exports = router;