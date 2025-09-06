const User = require("../models/user");
const jwt = require('jsonwebtoken');

// helper function to create token
const createToken = (_id,role) => {
  return jwt.sign({ _id ,role}, process.env.SECRET, { expiresIn: "3d" });
};
//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        //create a token
        const token = createToken(user._id,user.role);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
};
//signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        //create a token
        const token = createToken(user._id,user.role);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
   
};

module.exports = { loginUser, signupUser };