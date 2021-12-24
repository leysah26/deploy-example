import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDirectory = path.join(__dirname, './public')
console.log(__dirname)
console.log(publicDirectory)
app.use(express.static(publicDirectory))

const port = 10020
app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`)
})