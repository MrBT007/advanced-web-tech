const http = require('http')
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> This is g1</h1> <p> My Roll No : 20BCP023</p>')
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});