import mongoose from "mongoose"

const cartDetailsSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
   
},
{timestamps : true}
)

const CartDetails = mongoose.model("CartDetail",cartDetailsSchema);

export default CartDetails;