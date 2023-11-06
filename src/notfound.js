function notFound (res){
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    res.end()
}

exports.module = notFound