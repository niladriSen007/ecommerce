import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import fs from "fs"
import authRoutes from "./router/auth.js"
import userRoutes from "./router/user.js"
import productRoutes from "./router/product.js"
import cartRoutes from "./router/cart.js"
import orderRoutes from "./router/order.js"
import stripeRoutes from "./router/stripe.js"
import path from "path"
const __dirname = path.resolve();
dotenv.config({path:"./.env"})
const PORT = process.env.PORT || 4000;
const app=express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
import("./database/connection.js")

app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/products",productRoutes)
app.use("/orders",orderRoutes)
app.use("/carts",cartRoutes)
app.use("/checkout",stripeRoutes)

app.listen(PORT,()=>{
    console.log("Server is running")
})