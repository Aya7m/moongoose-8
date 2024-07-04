
import mongoose,{ Schema, model } from "mongoose";


const schema=new Schema({
    name:{
        type:String,
        required:true,
    },
    bio:String,
    birthDate:Date,
    books:{
        type:mongoose.Types.ObjectId,
        ref:'Book'
    },
       
    
})


export const Author = model('Author', schema);