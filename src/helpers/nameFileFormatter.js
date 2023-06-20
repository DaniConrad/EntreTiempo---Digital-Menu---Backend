const valid = [ "Productos", "Pizzas", "Empanadas", "DayMenu" ]
const Logger = require('../logs/model/log4js.model')

const nameFileFormatter = (filename) => {
    let newFileName
    for (let i = 0; i < filename.length; i++) {
        let name = isNaN(parseInt(filename.substring(i, (filename.length))))
        if (name === false) {
            newFileName = filename.substring(0, i)
            break
        }
    }
    const isValide = valid.some(item => item === newFileName)
    
    if (isValide) return newFileName
    Logger.warn(`Filename isn't valid ${newFileName}`)
    return false
}

module.exports = nameFileFormatter

