const nameFileFormatter = (filename) => {
    let newFileName
    for (let i = 0; i < filename.length; i++) {
        let name = isNaN(parseInt(filename.substring(i, (filename.length))))
        if (name === false) {
            newFileName = filename.substring(0, i)
            break
        }
    }
    return newFileName
}

module.exports = nameFileFormatter

