const raizpage = require('./pages/home')
const resut   = require('./pages/result')

let home = (res) =>{
    raizpage.module(res)
}

let result = (res, query) =>{
    resut.module(res, query)
}

exports.module = {
    home,
    result
}