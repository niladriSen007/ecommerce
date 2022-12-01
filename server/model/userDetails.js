import mongoose from "mongoose"

const userDetailsSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        validation(value)
        {
            if(!validator.isEmail(value))
                console.log("Invalid Email Address");
        }
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},
{timestamps : true}
)

const UserDetails = mongoose.model("UserDetail",userDetailsSchema);

export default UserDetails;