const http = require("http")

const PORT = 4000
const server = http.createServer((request, respond) => {
     if(request.url === "/"){
       respond.writeHead(200, {"content-type": "text/html"});
       respond.write(`<html><body><p>this is my hompage</p></body></html>`)
       respond.end()
     }else if(request.url === "/about"){
        respond.writeHead(200, {"content-type": "text/html"});
        respond.write(`<html><body><p>this is my About page</p></body></html>`)
        respond.end()
     }else if(request.url === "/contact"){
        respond.writeHead(200, {"content-type": "text/html"});
        respond.write(`<html><body><p>this is my Contact page</p></body></html>`)
        respond.end()
     }else{
        respond.end("invalid Request");
     }
})
server.listen(PORT , () => {
    console.log("port is up and listening");
})
