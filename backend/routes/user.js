const express = require("express");
const router = express.Router();
//import middlewares
const { requireAuth, requireAdmin } = require("../middlewares/authMiddleware");

//controller funcctions
const {signupUser,
  loginUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  upgradeToAdmin } = require("../controllers/userController");
//login route
router.post('/login', loginUser);
//signup route
router.post('/signup', signupUser);
//get all users route
router.get('/', requireAuth,requireAdmin,getAllUsers);
//get user by ID route
router.get('/:id',requireAuth,requireAdmin, getUserById);
//create user route (admin only)
router.post('/',requireAuth,requireAdmin, createUser);
//update user route (admin only)
router.put('/:id', requireAuth, requireAdmin, updateUserById);
//delete user route (admin only)
router.delete('/:id', requireAuth, requireAdmin, deleteUserById);
//upgrade
router.patch('/:id/upgrade', requireAuth, requireAdmin, upgradeToAdmin);


module.exports = router;