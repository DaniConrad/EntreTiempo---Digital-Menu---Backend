const config = require('../config/config')



const verifyCode = (req, res, next) => {
    if (config.PSW === req.params.key) {
        next()
        return res.status(200).send("success")
    }
    return res.status(403).send("fail")
}

module.exports = verifyCode
