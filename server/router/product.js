import express from "express"
import ProductDetails from "../model/productDetails.js";
import { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyJWTToken.js";
const router = express.Router();


//create a product
router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct = new ProductDetails(req.body);
    try
    {
        const newProd = await newProduct.save();
        res.status(200).json(newProd)
    }catch(e)
    {
        console.log(e);
    }
})


//update product
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try{
        const updatedProd = await ProductDetails.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
        console.log(updatedProd)
        res.status(200).json(updatedProd)
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
        await ProductDetails.findByIdAndDelete(req.params.id);
        res.status(200).json("Product deleted");
    }
    catch(e)
    {
        console.log(e)
    }
})


//get a product
router.get("/:id",async(req,res)=>{
    try
    {
        const product = await ProductDetails.findById(req.params.id);
        res.status(200).json(product)
    }
    catch(e)
    {
        console.log(e)
    }
})


//get all products
router.get("/",async(req,res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try
    {
        let products;

        if(queryNew)
            products = await ProductDetails.find().sort({createdAt:-1}).limit(1) 
        else if(queryCategory)
            products = await ProductDetails.find({categories:{$in:[queryCategory]}});
      else
            products = await ProductDetails.find()
        res.status(200).json(products)
    }
    catch(e)
    {
        console.log(e)
    }
})



export default router;