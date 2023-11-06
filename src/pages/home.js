const fs   = require('fs')

function home (res){
    fs.readFile('./src/files/index.html', 'utf-8', (err, data)=>{
        if(err) throw err
        
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
}

exports.module = home