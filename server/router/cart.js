import express from "express"
import CartDetails from "../model/cartDetails.js";
import { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyJWTToken.js";
const router = express.Router();


//create a product
router.post("/",verifyTokenAndAuthorization,async(req,res)=>{
    const newCart = new CartDetails(req.body);
    try
    {
        const newCart = await newCart.save();
        res.status(200).json(newCart)
    }catch(e)
    {
        console.log(e);
    }
})


//update product
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{

    try{
        const updatedCart = await CartDetails.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
        console.log(updatedCart)
        res.status(200).json(updatedCart)
    }
    catch(e)
    {
        // console.log("Hiiiiiiiiiiiiiiii")
        res.status(500).json(e)
    }
})


 //delete a product
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try
    {
        await CartDetails.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart deleted");
    }
    catch(e)
    {
        console.log(e)
    }
})


//get a user cart
router.get("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try
    {
        const cart = await CartDetails.findOne({userId:req.params.userId});
        res.status(200).json(cart)
    }
    catch(e)
    {
        console.log(e)
    }
})


//get all cart 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try
    {
        const carts = await CartDetails.find();
        res.status(200).json(carts)
    }
    catch(e)
    {
        res.status(500).json(e)
    }
})



export default router;