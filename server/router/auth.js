import express from "express"
import UserDetails from "../model/userDetails.js";
const router = express.Router();
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//register
router.post("/register",async(req,res)=>{
    let {userName,email,password,confirmPassword} = req.body;
    if(!userName || !email  || !password || !confirmPassword)
    {
        res.status(400).json({message:"Please fill the required details"})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try
    {
        const userExist =await UserDetails.findOne({email:email});
        if(userExist)
        {
            console.log(userExist);
            return res.status(422).json({message:"User alredy Exists"})
        }
        if(password !== confirmPassword)
        {
            return res.status(422).json({message:"Password Mismatch"})
        }
        const user = new UserDetails({
            userName:userName,
            email:email,
            password:hashedPassword,
            confirmPassword:hashedPassword,
        });

        await user.save();
        res.send("Posted")
    }
    catch(e)
    {
        res.status(500).json({message:e.message})
    }

})


//login
router.post("/login",async(req,res)=>{

    const {email,password} = req.body;
    if(!email || !password)
    {
        return res.status(403).json({message:"Invalid Login Credentials"})
    }
    try
    {
        const userExist = await UserDetails.findOne({email:email});
        if(!userExist)
        {
           return res.status(403).json({message:"User not exists"})
        }
        const matchedPass = await bcrypt.compare(req.body.password,userExist.password);
        // console.log(matchedPass)

        
        if(matchedPass)
        {
            const accessToken = jwt.sign({
                id:userExist._id,
                isAdmin:userExist.isAdmin,
            },process.env.SECRET_KEY,
            {expiresIn:"3d"})
            const {password,confirmPassword,...others} = userExist._doc;
            res.status(200).json({...others,accessToken})
        }
        else
            res.status(403).json("Please check the login credentials")
    }
    catch(e)
    {
        console.log(e);
    }
})
export default router;  