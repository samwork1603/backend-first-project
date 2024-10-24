import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateProfileDetails,
  updateAvatarImage,
  updateCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.midlleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/changecurrentpassword").post(verifyJWT, changeCurrentPassword);
router.route("/refreshAccessToken").post(refreshAccessToken);
router.route("/getcurrentuser").post(verifyJWT, getCurrentUser);
router.route("/updateprofiledetails").post(verifyJWT, updateProfileDetails);
router
  .route("/updateavatarimage")
  .post(upload.single("avatar"), verifyJWT, updateAvatarImage);
router
  .route("/updatecoverimage")
  .post(upload.single("coverImage"), verifyJWT, updateCoverImage);

console.log("user routes");
export default router;
