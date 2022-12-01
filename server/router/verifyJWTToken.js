import jwt from "jsonwebtoken"
const verifyToken = (req,res,next)=>{
    const authHeader =  req.headers.token;
    if(authHeader)
    {
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err)
                 res.status(403).json("Token not valid..")
            req.user = user;
            next();
        })
    }
    else
    {
       return res.status(401).json("You're not authenticated")
    }
}

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin )
            {
                // console.log(req.user)
                next();
            }
        else
            res.status(403).json("You are not allowed to do that")
    })
}


const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin )
            {
                // console.log(req.user)
                next();
            }
        else
            res.status(403).json("You are not allowed to do that")
    })
}

export {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}