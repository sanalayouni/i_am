const User = require("../models/user");
const jwt = require('jsonwebtoken');

// helper function to create token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
//login user
const loginUser = async (req, res) => {
    res.json({ message: "Login user" });
};
//signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        //create a token
        const token = createToken(user._id);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
   
};

module.exports = { loginUser, signupUser };