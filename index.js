import express from 'express'
import { dbcon } from './database/dbConntion.js'
import booksRouter from './src/modules/books/book.routers.js'

import authorsRouter from './src/modules/author/author.routers.js'

const app = express()
const port = 3000
app.use(express.json())

app.use('/books',booksRouter)
app.use('/author',authorsRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))