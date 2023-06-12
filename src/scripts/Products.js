const XLSX = require('xlsx');
const formatter = require('../helpers/formatter')

class Products {
    constructor(){
    }

    getProducts = () => {
        const workbook = XLSX.readFile('./public/data/uploads/productos.xlsx');
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const newRange = {
        s: { r: 9, c: 0 },
        e: { r: range.e.r, c: range.e.c }
        };
        sheet['!ref'] = XLSX.utils.encode_range(newRange);
    
        const products = XLSX.utils.sheet_to_json(sheet);
    
        return formatter(products)
    }

    getPizzas = () => {
        const workbook = XLSX.readFile('./public/data/uploads/empanadas.xlsx');
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const newRange = {
        s: { r: 9, c: 0 },
        e: { r: range.e.r, c: range.e.c }
        };
        sheet['!ref'] = XLSX.utils.encode_range(newRange);
    
        const empanadas = XLSX.utils.sheet_to_json(sheet);
    
        return formatter(empanadas)
    }

    getEmpanadas = () => {
        const workbook = XLSX.readFile('./public/data/uploads/pizzas.xlsx');
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const newRange = {
        s: { r: 9, c: 0 },
        e: { r: range.e.r, c: range.e.c }
        };
        sheet['!ref'] = XLSX.utils.encode_range(newRange);
    
        const pizzas = XLSX.utils.sheet_to_json(sheet);
    
        return formatter(pizzas)
    }
}

module.exports = new Products()
