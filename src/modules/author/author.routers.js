import { Router } from "express";
import { addAuther, deleteAuthor, getAllAuthors, getSingleAuthor, updateAuthor } from "./author.controller.js";



const authorsRouter=Router()





authorsRouter.post('/',addAuther)
authorsRouter.get('/',getAllAuthors)
authorsRouter.get('/:id', getSingleAuthor)
authorsRouter.patch('/update/:id', updateAuthor)
authorsRouter.delete('/delete/:id', deleteAuthor)
export default authorsRouter