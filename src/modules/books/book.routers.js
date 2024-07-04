import { Router } from "express";
import { addBook, deletbook, filter, getAllbooks, getsinglebook, updatebook } from "./book.controller.js";


const booksRouter=Router()

booksRouter.post('/',addBook)
booksRouter.get('/',getAllbooks)
booksRouter.get('/filter',filter)
booksRouter.get('/:id',getsinglebook)
booksRouter.patch('/book/:id',updatebook)
booksRouter.delete('/book/:id',deletbook)
export default booksRouter