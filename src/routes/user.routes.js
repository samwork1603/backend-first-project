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
  getWatchHistory,
  getUserChannelProfile,
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
router.route("/getcurrentuser").get(verifyJWT, getCurrentUser);
router.route("/updateprofiledetails").patch(verifyJWT, updateProfileDetails);
router
  .route("/updateavatarimage")
  .patch(verifyJWT, upload.single("avatar"), updateAvatarImage);
router
  .route("/updatecoverimage")
  .patch(verifyJWT, upload.single("coverImage"), updateCoverImage);
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/watchhistory").get(verifyJWT, getWatchHistory);

console.log("user routes");
export default router;
  