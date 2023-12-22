const express = require("express");
const {
  signupUser,
  loginUser,
  checkAvailableUserName,
  updateProfile,
  followUser,
  unfollowUser,
  getAllUsers,
  getMe,
  anotherUser,
  searchUser,
} = require("./controllers/user-controller");
const auth = require("./middlewares/auth");
const {
  addPost,
  getAllPosts,
  deletePost,
  getUserPosts,
  likePost,
} = require("./controllers/post-controller");
const router = express.Router();

router.post(`/signup`, signupUser);
router.post(`/login`, loginUser);
router.post(`/check`, checkAvailableUserName);
router.put(`/user/me`, auth, updateProfile);
router.put(`/user/follow/:id`, auth, followUser);
router.get(`/user`, auth, getAllUsers);
router.get(`/me`, auth, getMe);
// router.get(`/user/:id`, auth, anotherUser);
router.get(`/user/search`, auth, searchUser);

router.post(`/post`, auth, addPost);
router.get(`/post`, auth, getAllPosts);
router.delete(`/post/:id`, auth, deletePost);
router.get(`/post/:user`, auth, getUserPosts);
router.put(`/post/like/:id`, auth, likePost);

module.exports = router;
