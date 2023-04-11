const XLSX = require('xlsx');

class Products {
    constructor(){
    }

    getProducts = () => {
        const workbook = XLSX.readFile('./src/public/data/uploads/products.xlsx');
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const newRange = {
        s: { r: 9, c: 0 },
        e: { r: range.e.r, c: range.e.c }
        };
        sheet['!ref'] = XLSX.utils.encode_range(newRange);
    
        const products = XLSX.utils.sheet_to_json(sheet);
    
        return products
    }

    saveProducts = () => {
        
    }
}

// const getProducts = () => {
//     const workbook = XLSX.readFile('./src/public/data/uploads/products.xlsx');
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     const range = XLSX.utils.decode_range(sheet['!ref']);
//     const newRange = {
//     s: { r: 9, c: 0 },
//     e: { r: range.e.r, c: range.e.c }
//     };
//     sheet['!ref'] = XLSX.utils.encode_range(newRange);

//     const products = XLSX.utils.sheet_to_json(sheet);

//     return products
// }

module.exports = new Products()
