const { json } = require("express");
const bcrypt=require('bcryptjs');


const User=require('../models/user-models');
const user = require("../models/user-models");

const home=(async(req,res)=>{
    try {
         res.status(200).send("Welcome to the home page using router using controllers");
    } catch (error) {
        console.log(error);
    }

})

const register=(async(req,res)=>{
    try {
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        
        const userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
       
        
        const userCreated = await User.create({username,email,phone,password});
        res.status(201).json({message: "User registered successfully",token: await userCreated.generateToken(),userId:userCreated._id.toString()});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error occurred while registering user"});
    }
})

const login= (async (req,res)=> {
   try {
    const {email,password}=req.body;
    const userExists=await User.findOne({email});
    console.log(userExists);


    if(!userExists){
        return res.status(400).json({message:"Invalid credentials"})
    }

    const user=await userExists.comparePassword(password);

    if(user){
        res.status(200).json({message: "Login Succesfull",token: await userExists.generateToken(),userId:userExists._id.toString()});
    }
    else{
        res.status(401).json({message:"Invalid user and password"});
    }
    
   } catch (error) {
       res.status(500).json("internal error occured");
   }
}
);


const Users=async (req,res)=>{
    try {
        const userData =req.user;
        console.log(userData);
        res.status(200).json({userData});
    } catch (error) {
        console.log("error from the user route",error);
    }
}



module.exports={home,register,login,Users};