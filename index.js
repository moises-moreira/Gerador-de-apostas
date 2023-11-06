const http = require('http')
const app  = require('./src/app') 

http.createServer(app.module).listen(8080, ()=> console.log('server starting in: 8080'))