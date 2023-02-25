import express from 'express';
import { changePassword, getMyProfile, login, logOut, signup, updateProfile, updatePic, forgetPassword, resetPassword } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();


router.post("/login", login);
router.post("/new",singleUpload, signup);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logOut);

//Updateing Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatePic", isAuthenticated,singleUpload, updatePic);


// Forget Password and Reset Password
router.route("/forgetPassword").post(forgetPassword).put(resetPassword);


export default router;