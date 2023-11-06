const url  = require('url')
const notFound = require('./notfound')
const routs = require('./routers')

function appServer (req, res){
    let generic = url.parse(req.url, true)
    let search = generic.search
    let query  = generic.query

    if(req.url == '/'){
        routs.module.home(res)
        return
    }

    if(req.url == '/' + search){
        if(query.nu != undefined){
            routs.module.result(res, query)
            return
        }
        notFound.module(res)
        return
    }
    notFound.module(res)
}

exports.module = appServer