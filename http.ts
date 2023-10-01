import http,{ServerResponse, IncomingMessage} from "http"
// const port:number = 1889

// const server  = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
//     res.writeHead(200)
//     res.write("server is up and running using typescript")
//     res.end()
// })
// server.listen(port, () => {
//     console.log(`listen on port : ${port} `);
    
// })


// const port: Number = 1990

// const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
//     res.writeHead(200)
//     res.write("this is the port for habeeb")
//     res.end()
// })
// server.listen(port, () => {
//     console.log(`listen on port: ${port}`);
    
// })
// const port: number = 3000
// const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
//     res.writeHead(200)
//     res.write("Habeeb create Localhost for the first time")
//     res.end()
// })
// server.listen(port, () => {
//     console.log(`listen on port: ${port}`);
    
// })
const port:number = 4000
const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
    res.writeHead(200)
    res.write("this was created by habeeb for the first time")
    res.end()
})
server.listen(port, () => {
    console.log(`listen on port: ${port}`);
    
})