const express=require('express')
const Router=express.Router();
const zod=require("zod");
const {User,Account}= require("../db");
const {JWT_Secret}= require("../config");
const {authMiddleware}=require("../middleware")
const jwt=require('jsonwebtoken')

const signUpBody= zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

Router.post('/signup',async (req,res)=>{
    const {success}=signUpBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const existingUser= await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message:"User already exists"
        })
    }
    const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })
    const userId=user._id;

    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })

    const token=jwt.sign({userId},JWT_Secret);
    res.json({
        message:"User created successfully",
        token:token
    })
})

const signInBody=zod.object({
    username: zod.string().email(),
    password: zod.string()
})

Router.post('/signin',async (req,res)=>{
    const {success}= signInBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message:"Incorrect inputs"
        })
    }
    const user=await User.findOne({
        username: req.body.username,
        password:req.body.password
    })
    if(user){
        const token= jwt.sign({
            userId:user._id
        },JWT_Secret);
        return res.json({
            token:token
        });
    }
    res.status(411).json({
        message:"Error while logging in"
    })
})

const updateBody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

Router.put("/",authMiddleware,async(req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message:"Error while updating information"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    return res.json({message:"updated successfully"});
})

Router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || "";
    const users= await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports={
    userRouter:Router
}