import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js"
import { cookieOptions, getDataUri, sendEmail, sendToken } from "../utils/features.js";
import cloudinary from "cloudinary";

export const login = asyncError(
   async (req, res, next) => {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");

      //handle error
      if (!user) {
         return next(new ErrorHandler("Incorrect Crendials", 400));
      }

      if (!password) {
         return next(new ErrorHandler("Please Enter Password", 400));
      }


      //Error handler
      const isMatched = await user.comparePassword(password);

      if (!isMatched) {
         return next(new ErrorHandler("Incorrect Credentials", 400));
      }

      const token = user.generateToken();

      sendToken(user, res, `Welcome Back, ${user.name}`, 200);
   }
)
export const signup = asyncError(
   async (req, res, next) => {

      const { name, email, password, address, city, country, pinCode } = req.body;

      let user = await User.findOne({ email });

      if (user) return next(new ErrorHandler("User Already Exist", 400));

      let avatar = undefined;
      if (req.file) {
         const file = getDataUri(req.file);
         //Adding cloudinary 
         const myCloud = await cloudinary.v2.uploader.upload(file.content);
         avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
         }
      }

      user = await User.create({ avatar, name, email, password, address, city, country, pinCode });

      res.status(201).json({
         success: true,
         message: "Registered Successfully"
      });
      sendToken(user, res, "Registered Successfully", 201);

   }
)

export const logOut = asyncError(
   async (req, res, next) => {


      res.status(200).cookie("token", "", {
         ...cookieOptions,
         expires: new Date(Date.now()),
      }).json({
         success: true,
         message: "Logged Out Successfully",
      });

   }
)

export const getMyProfile = asyncError(
   async (req, res, next) => {
      const user = await User.findById(req.user._id);

      res.status(200).json({
         success: true,
         user,
      });

   }
)

export const updateProfile = asyncError(
   async (req, res, next) => {
      const user = await User.findById(req.user._id);
      const { name, email, address, city, country, pinCode } = req.body;

      if (name) user.name = name;
      if (email) user.email = email;
      if (address) user.address = address;
      if (city) user.city = city;
      if (country) user.country = country;
      if (pinCode) user.pinCode = pinCode;

      await user.save();

      res.status(200).json({
         success: true,
         message: "Profile Updated Successfully"
      });

   }
)
export const changePassword = asyncError(
   async (req, res, next) => {
      const user = await User.findById(req.user._id).select("+password");

      const { oldPassword, newPassword } = req.body;

      if (!oldPassword || !newPassword) {
         return next(new ErrorHandler("Please Enter Old Password & New Password", 400));
      }

      //condition to check password is correct
      const isMatched = await user.comparePassword(oldPassword);
      if (!isMatched) {
         return next(new ErrorHandler("Incorrect Old Password", 400));
      }

      user.password = newPassword;

      await user.save();
      res.status(200).json({
         success: true,
         message: "Password  Change successfully",
      });

   }
)


export const updatePic = asyncError(
   async (req, res, next) => {
      //Finding the User
      const user = await User.findById(req.user._id);

      //Getting Buffer Data from Image
      const file = getDataUri(req.file);

      //Deleting the current Image from Cloudinary
      await cloudinary.v2.uploader.destroy(user.avatar.public_id);


      //uploading the new Image to cloudinary 
      const myCloud = await cloudinary.v2.uploader.upload(file.content);

      //Changing the avatar data in user Database
      user.avatar = {
         public_id: myCloud.public_id,
         url: myCloud.secure_url,
      }

      //Saving the user 
      await user.save();


      //Sending the Message
      res.status(200).json({
         success: true,
         message: "Avatar Updated Successfully"
      });

   }
)


export const forgetPassword = asyncError(
   async (req, res, next) => {
      //Finding the user
      const { email } = req.body;
      const user = await User.findOne({ email });

      //If user not found with email
      if (!user) return next(new ErrorHandler("User not exist with this Email", 404));

      //Generating random number of 6 digits then convert it to otp then setting expire time to 15 minutes
      const randomNumber = Math.random() * (999999 - 100000) + (100000);
      const otp = Math.floor(randomNumber);
      const otpExpire = 1000 * 60 * 15;

      //Saving the otp and otpExpire
      user.otp = otp;
      user.otp_expire = new Date(Date.now() + otpExpire);
      await user.save();

      const message = `Your OTP for reseting password is ${otp}. \n\tPlease ignore if you haven't requested this.`;
      try {
         await sendEmail("OTP for reseting Password", user.email, message);
      } catch (error) {
         user.otp = null;
         user.otp_expire = null;
         await user.save();
         return next(error);
      }



      res.status(200).json({
         success: true,
         message: `Email send to ${user.email}`,
      });

   }
)
export const resetPassword = asyncError(
   async (req, res, next) => {
      const { otp, password } = req.body;

      const user = await User.findOne({
         otp,
         otp_expire: {
            $gt: Date.now(),
         }
      });

      if (!user) return next(new ErrorHandler("Incorrect OTP or has been Expired", 400));

      if(!password) return next(new ErrorHandler("Please Entered new Password", 400));

      user.password = password;
      user.otp = undefined;
      user.otp_expire = undefined;

      await user.save();

      res.status(200).json({
         success: true,
         message: "Password Changed successfully, You can Login Now."
      });

   }
)