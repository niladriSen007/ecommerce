import express from "express"
import UserDetails from "../model/userDetails.js";
import { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyJWTToken.js";
const router = express.Router();

//update user
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
   if(req.body.password)
    {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try{
        // console.log(req.user.id)
        const updatedUser = await UserDetails.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
        console.log(updatedUser)
        res.status(200).json(updatedUser)
    }
    catch(e)
    {
        // console.log("Hiiiiiiiiiiiiiiii")
        res.status(500).json(e)
    }
})


//delete a user
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try
    {
        await UserDetails.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
    }
    catch(e)
    {
        console.log(e)
    }
})


//get a user
router.get("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try
    {
        const user = await UserDetails.findById(req.params.id);
        const {password,confirmPassword,...others} = user._doc;
        res.status(200).json(others)
    }
    catch(e)
    {
        console.log(e)
    }
})


//get all user
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    const query = req.query.new;
    try
    {
        const users = query?   await UserDetails.find().sort({_id:-1}).limit(5) : await UserDetails.find();
        // const {password,confirmPassword,...others} = user._doc;
        res.status(200).json(users)
    }
    catch(e)
    {
        console.log(e)
    }
})




//GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
//     try {
//       const data = await UserDetails.aggregate([
//         { $match: { createdAt: { $gte: lastYear } } },
//         {
//           $project: {
//             month: { $month: "$createdAt" },
//           },
//         },
//         {
//           $group: {
//             _id: "$month",
//             total: { $sum: 1 },
//           },
//         },
//       ]);
//       res.status(200).json(data)
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

export default router;