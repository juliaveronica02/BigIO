var express = require('express');
var router = express.Router();
const userController = require("../Controllers/User")

router.post("/create", userController.create)
router.get("/show", userController.getAllData)

module.exports = router;