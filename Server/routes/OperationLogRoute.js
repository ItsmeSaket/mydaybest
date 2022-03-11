const opUserController = require("../controller/OperationLogController");
const express = require("express");
const router = express.Router();
const multer = require("multer");
//const upload = multer({ dest: "uploads/" });
const { awsMultipartUpload } = require("../s3");
const fs = require("fs");
const { promisify}= require("util");
const unlinkAsync = promisify(fs.unlink);
const { OperationLog } = require("../models/Operation_Log");
const upload = multer({ dest: "upload/" }).array("files", 3);

const {
  auth,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/middle");


router.post("/Add_Details",upload,awsMultipartUpload, opUserController.OperationUser);
router.post("/Find_Details", auth, opUserController.OperationUserFind);
router.post("/Find_Row",opUserController.OperationFlightFind);
router.put("/Update_Details", auth, opUserController.OperationUserUpdate);
module.exports = router;

