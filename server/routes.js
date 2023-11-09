const express = require("express");
const {
  signupUser,
  loginUser,
  checkAvailableUserName,
  updateProfile,
  followUser,
  unfollowUser,
  getAllUsers,
} = require("./controllers/user-controller");
const auth = require("./middlewares/auth");
const {
  addPost,
  getAllPosts,
  deletePost,
  getUserPosts,
  likePost,
  unlikePost,
} = require("./controllers/post-controller");
const router = express.Router();

router.post(`/signup`, signupUser);
router.post(`/login`, loginUser);
router.get(`/check`, checkAvailableUserName);
router.put(`/user/me`, auth, updateProfile);
router.put(`/user/follow/:id`, auth, followUser);
router.put(`/user/unfollow/:id`, auth, unfollowUser);
router.get(`/user`, auth, getAllUsers);

router.post(`/post`, auth, addPost);
router.get(`/post`, auth, getAllPosts);
router.delete(`/post/:id`, auth, deletePost);
router.get(`/post/:user`, auth, getUserPosts);
router.put(`/post/like/:id`, auth, likePost);
router.put(`/post/unlike/:id`, auth, unlikePost);

module.exports = router;
