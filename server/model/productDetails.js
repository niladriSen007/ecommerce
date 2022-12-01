import mongoose from "mongoose"

const postDetailsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
       required:true,
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
    },
    size:{
        type:Array,
    },
    color:{
        type:Array,
    },
    newPrice:{
        type:Number,
    },
    oldPrice:{
        type:Number,
    }
    ,off:{
        type:Number,
    }
    ,
    inStock:{
        type:Boolean,
        default:true,
    }
},
{timestamps : true}
)

const PostDetails = mongoose.model("PostDetail",postDetailsSchema);

export default PostDetails;