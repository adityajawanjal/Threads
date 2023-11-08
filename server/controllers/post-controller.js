const User = require("../models/user-model");
const Post = require("../models/post-model");
const cloudinary = require("../middlewares/cloudinary");
const formidable = require("formidable");

exports.addPost = async (req, res) => {
  try {
    const post = new Post({});
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(400)
          .json({ msg: "Error in multimedia data in addPost !" });
      }
      if (fields.text) {
        post.text = fields.text;
      }
      if (files.media) {
        const media = await cloudinary.v2.uploader.upload(
          files.media.filepath,
          { folder: "Threads/Posts" }
        );
        post.media = media.secure_url;
      }
    });
    post.user = req.user._id;
    await post.save();
    return res.status(201).json({ msg: "Post added successfully !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in addPost !", err: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("likes").populate("comments");
    return res.status(200).json({ msg: "All posts loaded !", posts });
  } catch (err) {
    res.status(400).json({ msg: "Error in getAllPosts !", err: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const permitted = await Post.findById(id);
    if (permitted.user !== req.user._id) {
      return res
        .status(400)
        .json({ msg: "You are not permitted to delete this post !" });
    }
    await Post.findByIdAndDelete(id);
    await User.updateMany(
      { _id: { $in: req.user.posts } },
      { $pull: { posts: id } }
    );
    await User.updateMany(
      { _id: { $in: req.user.reposts } },
      { $pull: { reposts: id } }
    );
    return res.status(201).json({ msg: "Post deleted !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in deletePost !", err: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user._id })
      .populate("likes")
      .populate("comments");
    return res.status(200).json({ msg: "All post of user is loaded !", posts });
  } catch (err) {
    return res
      .status(400)
      .json({ msg: "Error inn getUserPosts !", err: err.message });
  }
};
