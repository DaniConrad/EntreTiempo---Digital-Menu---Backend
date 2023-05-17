const express = require('express')
const storage = require('./src/helpers/multer')
const multer = require('multer')
const path = require('path')
const Products = require('./src/scripts/Products')
const cors = require('cors')
const verifyCode = require('./src/Middlewares/AuthMiddleware')
const http = require("http")
const fs = require('fs')

//-- Initializers
const app = express()
const PORT = process.env.PORT || 8080 
const upload = multer({ storage: storage })
app.use(express.urlencoded({extended:false}))
const httpServer = http.createServer(app);

// SSL 
const file = fs.readFileSync('./ssl/97D94AB13BDE5B641564C1FC65EA9368.txt')

//-- Middlewares 
app.use('/static', express.static(path.join(__dirname, './src/public')));
app.use(cors())

//-- Routes

app.get("/.well-known/pki-validation/9B211C8A679E100CA6B2C6B7BF9A5466.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "./ssl/97D94AB13BDE5B641564C1FC65EA9368.txt"))
})

app.get("/", (req, res) => {
    res.send("Running")
})

app.post(`/dataloadmanagement/:key`,  (req, res, next) => verifyCode(req, res, next), upload.single('Products'),

)

app.get('/products', (req, res) => {
    res.send(Products.getProducts())
})

// --Run server 
const server = httpServer.listen(PORT, ()=>{
    console.log(`Server running in ${PORT}...`);
})
server.on('error', error => console.log('Error on server', error))