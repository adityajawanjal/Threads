const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const cloudinary = require("../middlewares/cloudinary");

exports.signupUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "userName , email and password are required !" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Already Registered.Please Login !" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    const token = jwt.sign({ tokenId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return res
      .status(201)
      .json({ msg: "User Registered Successfully !", token });
  } catch (err) {
    res.status(400).json({ msg: "Error in signupUser", err: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "email and password required !" });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Please Sign up first !" });
    }
    const passwordMatched = await bcrypt.compare(password, userExist.password);
    if (!passwordMatched) {
      return res.status(400).json({ msg: "Invalid credentials !" });
    }
    const token = jwt.sign({ tokenId: userExist._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return res
      .status(201)
      .json({ msg: "User Logged in Successfully !", token });
  } catch (err) {
    res.status(400).json({ msg: "Error in loginUser", err: err.message });
  }
};

exports.checkAvailableUserName = async (req, res) => {
  try {
    const { userName } = req.query;
    if (!userName) {
      return res.status(400).json({ msg: "Please enter userName !" });
    }
    const userExists = await User.findOne({ userName });
    if (userExists) {
      return res.status(400).json({ msg: "UserName is already taken !" });
    }
    return res.status(200).json({ msg: "UserName is available !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in loginUser", err: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(400)
          .json({ msg: "Error in multimedia data in updateProfile !" });
      }
      if (fields.bio) {
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { bio: fields.bio },
          { new: true }
        );
      }
      if (files.profilePic) {
        const media = await cloudinary.v2.uploader.upload(
          files.profilePic.filepath,
          { folder: "Threads/Profiles" }
        );
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { profilePic: media.secure_url },
          { new: true }
        );
      }
      return res.status(201).json({ msg: "Profile updated successfully !" });
    });
  } catch (err) {
    res.status(400).json({ msg: "Error in updateProfile.", err: err.message });
  }
};

exports.followUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $push: { followers: req.user._id } },
      { new: true }
    );
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { followings: user._id } },
      { new: true }
    );
    return res.status(201).json({ msg: `Following ${user.userName}` });
  } catch (err) {
    res.status(400).json({ msg: "Error in followUser !", err: err.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $pull: { followers: req.user._id } },
      { new: true }
    );
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { followings: user._id } },
      { new: true }
    );
    return res.status(201).json({ msg: `Unfollowed ${user.userName}` });
  } catch (err) {
    res.status(400).json({ msg: "Error in unfollowUser !", err: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .select("-password")
      .populate("followers")
      .populate("followings");
    return res.status(200).json({ msg: "All users fetched !", users });
  } catch (err) {
    res.status(400).json({ msg: "Error in getAllUsers !", err: err.message });
  }
};
