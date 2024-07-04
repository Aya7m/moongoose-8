import { Author } from "../../../database/models/author.model.js"


let addAuther = async(req, res) => {
    let author =await Author.insertMany(req.body)
    res.json({ message: 'success', author })
}


let getAllAuthors = async(req, res) => {
    let authors =await Author.find().populate('books')
    res.json({ message: 'success', authors })
}

let getSingleAuthor = async(req, res) => {
    let author =await Author.findById(req.params.id).populate('books')
    res.json({ message: 'success', author })
}

let updateAuthor = async(req, res) => {
    let author =await Author.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({ message: 'success', author })
}

let deleteAuthor = async(req, res) => {
    let author =await Author.findByIdAndDelete(req.params.id)
    res.json({ message: 'success', author })
}
export {
    addAuther,
    getAllAuthors,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor
}