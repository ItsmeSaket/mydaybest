const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")
const crypto=require("crypto");
const bcrypt=require("bcryptjs");
const UserSchema = new Schema({
    name: {
      type: String,
      require:true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique:true
    },
    
    password: {
      type: String,
      require: true,
    },
    usertype: {
      type: String,
       require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
  });


  UserSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
 

  UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  UserSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };


  const User = mongoose.model("User", UserSchema);
  module.exports = { User };