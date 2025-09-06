const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');// Load environment variables
const User = require('./models/user');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    const admin = new User({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
  