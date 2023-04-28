require('dotenv').config();
console.log(process.env.PSW);
console.log(process.env);
module.exports = {
    PSW : process.env.PSW
    
}