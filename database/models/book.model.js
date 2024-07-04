import mongoose, { Schema, model } from "mongoose";


const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    auther: {
        type: String,
        required: true,
    },



})


export const Book = model('Book', schema)