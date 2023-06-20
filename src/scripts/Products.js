const XLSX = require('xlsx');
const formatter = require('../helpers/formatter')

class Products {
    constructor(){
    }

    getProducts = () => {
        let productsList = []

        const workbooks = [
            XLSX.readFile('./public/data/uploads/Productos.xlsx'),
            XLSX.readFile('./public/data/uploads/Pizzas.xlsx'),
            XLSX.readFile('./public/data/uploads/Empanadas.xlsx')
        ]
            
        for (let i = 0; i < workbooks.length; i++) {

            const sheetName = workbooks[i].SheetNames[0];
            const sheet = workbooks[i].Sheets[sheetName];
        
            const range = XLSX.utils.decode_range(sheet['!ref']);
            const newRange = {
            s: { r: 9, c: 0 },
            e: { r: range.e.r, c: range.e.c }
            };
            sheet['!ref'] = XLSX.utils.encode_range(newRange);
        
            const products = XLSX.utils.sheet_to_json(sheet);
            productsList = productsList.concat(products)
        }
    
        return formatter(productsList)
    }
    
}

module.exports = new Products()
