function greet(name){
    return `Hello, ${name}`;
}

if (require.main === module){
    const http = require("node:http")

    const server = http.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end(greet("Github and Docker"))
    })

    server.listen(3000, "0.0.0.0",()=>{
        console.log("App running on port 3000")
    })
}

module.exports = {greet}