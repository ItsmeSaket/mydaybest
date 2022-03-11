const {User}=require('../models/user');
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail");
const crypto = require("crypto");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander= require("../utils/errorhandler")
const jwt = require("jsonwebtoken")




exports.signup= async (req, res) => {
  //console.log(req.body)
  
    User.find({ email: req.body.email }, async (err, result) => {
      let user
        if (err) res.status(400).json({ message: "already registered" });
        else{
          {
            user = new User({
              name:req.body.name,
              username: req.body.username,
              email: req.body.email,
              password:bcrypt.hashSync(req.body.password,10),
              phone: req.body.phone,
              usertype:req.body.usertype,
          })
         
        
          user = await user.save();
        }
          
        
          if (!user) return res.status(400).send({message:"the user cannot be created!"});
        
          res.status(200).send(user);
        } 
  })
}



exports.signin=catchAsyncErrors(async(req,res,next)=>{
    const user=await User.findOne({$and:[{email:req.body.email},{usertype:req.body.usertype}]});
    //const secret=process.env.JWT_SEC
      if(!user)
      {
          return res.status(400).send({message:"the user not found"});
      }
      if(user && bcrypt.compareSync(req.body.password,user.password))
      {
        sendToken(user, 200, res);
         //getToken({ email: user.email, id: user._id });
        
      }
      else{
        return res.status(400).send({message: "password or email didn't match"});
       // return next(new ErrorHander("Password or email didn't match'", 400));
      }
  });
 
exports.dashboard=(req,res)=>{
  res.status(200).send({message:"welocme in dashboard"});

}

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetPasswordUrl = `http://localhost:4000/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Daybest Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return next(new ErrorHander(error.message, 500));
  }
});



exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("Password does not password", 400));
  }

  user.password = bcrypt.hashSync(req.body.password,10),
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
})