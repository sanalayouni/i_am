const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');



/*const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}*/

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    password:{
        type:String,
        required:true
    }


})

//static signup method
userSchema.statics.signup = async function(email,password){


    //validation
    if(!email || !password){
        throw Error('All fields must be filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email not valid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    //check if email already exists
    const exists = await this.findOne({email});
    if(exists){
        throw Error('Email already in use');
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    //create user
    const user = await this.create({email,password:hash});
    //generate token
     
     //const token = createToken(user._id);


    return {user};
}
module.exports = mongoose.model("User", userSchema);