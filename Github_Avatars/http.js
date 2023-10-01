const http = require("http")

// const PORT = 2000
// const server = http.createServer((request, respond) => {
//      respond.writeHead(200)
//      respond.write("server is up and running 👌😉")
//      respond.end()
// })
// server.listen(PORT , () => {
//     console.log("port is up and listening");
// })


// const port = 2900
// const server = http.createServer((req, res) => {
//     res.writeHead(200)
//     res.write("this is javascript localhost")
//     res.end()
// })
// server.listen(port, () => {
//     console.log("listen on port");
// })

const port = 2000
const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.write("this was created by habeeb")
    res.end()
})
server.listen(port, () => {
    console.log("listen on port");
})
