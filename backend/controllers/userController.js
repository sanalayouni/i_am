const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Helper: Create token
const createToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: "3d" });
};

// Signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user.user._id, user.user.role); 
    res.status(201).json({ user: user.user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id, user.role);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create user manually (admin panel) - password needs hashing first
const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const newUser = await User.signup(email, password); // ensures hashing & validation
    if (role) newUser.user.role = role; // optional role assignment
    await newUser.user.save();
    res.status(201).json(newUser.user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user
const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user
const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upgrade user to admin
const upgradeToAdmin = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User upgraded to admin", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  upgradeToAdmin
};
