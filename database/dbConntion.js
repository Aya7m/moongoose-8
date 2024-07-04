import { connect } from "mongoose";


export const dbcon= connect('mongodb://localhost:27017/ass8').then(()=>{
    console.log('database connected successfully.');
}).catch(()=>{
    console.log('database err connection.');
})