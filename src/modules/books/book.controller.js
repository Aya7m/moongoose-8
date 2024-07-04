
import { Book } from "../../../database/models/book.model.js"



const addBook= async(req,res)=>{
  let book=await Book.insertMany(req.body)
  res.json({message:'success',book})

}

const getAllbooks=async (req, res) => {
  let books = await Book.find()
  res.json({ message: 'success',books })
}
const filter=async (req, res) => {
  let books = await Book.findOne({title:'alahlam'})
  res.json({ message: 'success',books })
}

const getsinglebook=async (req, res) => {
  let book = await Book.findById(req.params.id)
  res.json({ message: 'success',book })
}

const updatebook=async(req,res)=>{
  let book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:'true'})
  res.json({ message: 'success', book })
}

const deletbook=async(req,res)=>{
  let book=await Book.findByIdAndDelete(req.params.id,req.body)
  res.json({ message: 'success', book})
}
export{
    addBook,
    getAllbooks,
    getsinglebook,
    updatebook,
    deletbook,
    filter
}