import express from "express"
import OrderDetails from "../model/OrderDetails.js";
import { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyJWTToken.js";
const router = express.Router();


//create a product
router.post("/",verifyTokenAndAuthorization,async(req,res)=>{
    const newOrder = new OrderDetails(req.body);
    try
    {
        const newOrd = await newOrder.save();
        res.status(200).json(newOrd)
    }catch(e)
    {
        console.log(e);
    }
})


//update product
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try{
        const updatedorder = await OrderDetails.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
        console.log(updatedorder)
        res.status(200).json(updatedorder)
    }
    catch(e)
    {
        // console.log("Hiiiiiiiiiiiiiiii")
        res.status(500).json(e)
    }
})


 //delete a product
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try
    {
        await OrderDetails.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted");
    }
    catch(e)
    {
        console.log(e)
    }
})


//get a user order
router.get("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try
    {
        const order = await OrderDetails.find({userId:req.params.userId});
        res.status(200).json(order)
    }
    catch(e)
    {
        console.log(e)
    }
})


//get all order 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try
    {
        const orders = await OrderDetails.find();
        res.status(200).json(orders)
    }
    catch(e)
    {
        res.status(500).json(e)
    }
})



export default router;