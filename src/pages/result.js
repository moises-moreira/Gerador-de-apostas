const fs   = require('fs')

let result = (res, query)=>{
    fs.readFile('./src/files/page2.css', 'utf-8', (err, data)=>{
        if (err) throw err
        const number = Number.parseInt(query.nu)
        let aray = []
        let rand = 0
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html lang="pt-br">')
        res.write('<head>')
        res.write('<meta charset="UTF-8">')
        res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
        res.write('<title>Apostas</title>')
        res.write('<style>')
        res.write(data)
        res.write('</style>')
        res.write('</head>')
        res.write('<body>')
        res.write('<div class="content-apostas">')
        res.write('<h1>Resultado</h1>')
        for (i = 0; i < number; i++){
            res.write('<div class="apostas">')
            res.write(`<h2>aposta nº ${i+1}</h2>`)
            for(j = 0; j < 6; j++){
                while(true){
                    rand = Math.floor(Math.random() * 100)
                    if(aray[j] != rand){
                        aray[j] = rand
                        break
                    }
                }
                res.write(`<span class="aposta">${aray[j]}</span>`)
            }
            res.write('</div>')
        }
        res.write('</div>')
        res.write('<a class="bnt" href="/">voltar</a>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    })
}

exports.module = result