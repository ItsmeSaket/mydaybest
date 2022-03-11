const dashboardController = require('../controller/dashboardController')
const express = require('express');
const router = express.Router();
const {
    auth,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../middleware/middle");
router.get("/",auth,dashboardController.dashboard);

module.exports=router;