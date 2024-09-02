import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    gmail:{
        type:String
    },
    password:{
        type:String
    }
})

export const User = mongoose.model("User",userSchema)