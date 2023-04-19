const express = require('express')
const storage = require('./src/helpers/multer')
const multer = require('multer')
const path = require('path')
const Products = require('./src/scripts/Products')
const cors = require('cors')
const getVariable = require('./src/Middlewares/AuthMiddleware')

//-- Initializers
const app = express()
const PORT = process.env.PORT || 8080 
const upload = multer({ storage: storage })
app.use(express.urlencoded({extended:false}))

//-- Middlewares 
app.use('/static', express.static(path.join(__dirname, './src/public')));
app.use(cors())

//-- Routes
app.post('/dataloadmanagement',  (req, res, next) => getVariable(req, res, next), upload.single('Products'),

)

app.get('/products', (req, res) => {
    res.send(Products.getProducts())
})

console.log(getVariable());


// app.post('/products', (req, res, next) => ProductsMiddlewares.verifyRole(req, res, next), upload.single('prodImg'), this.productsController.saveProduct)
// app.post('/products', upload.single('products'), (req, res) => {
//     res.send('success')
// })

// --Run server 
const server = app.listen(PORT, ()=>{
    console.log(`Server running in ${PORT}...`);
})
server.on('error', error => console.log('Error on server', error))