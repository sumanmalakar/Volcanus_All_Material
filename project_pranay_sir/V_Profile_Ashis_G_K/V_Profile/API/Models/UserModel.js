import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true, 
    },
    phone:{
        type:String,
        require:true,
        unique:true,
    },
    address:{
        type:String,
        require:true,
    },
    discription:{
        type:String,
        require:true,
    },
    imgurl:{
        type:String ,default:""
    },
    public_id:{
        type:String ,default:""
    }
    
    })

export  const User = mongoose.model("User" ,userSchema);
  