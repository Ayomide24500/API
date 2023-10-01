import http, { IncomingMessage, ServerResponse } from "http"
const port: number = 5000

interface iMessage {
    message: string;
    data: null | [] |{}[]
    success: boolean
}

let Details = [
    {
        id: 1,
        Subject: "Mathematics",
        question: "Calculate 1+1"
    },
    {
        id: 2,
        Subject: "English",
        question: "What is a noun"
    }

]
const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
     res.setHeader("content-type", "Application/json")

     let status = 404

     const {method, url} = req

     let response: iMessage = {
        message: "failed",
        data: null,
        success: false
     }

     let Holder = ""
    
     req.on("data", (chunk) => {
        Holder += (chunk)
     })
     req.on("end", () => {
        if(method === "GET"){
            const GetData = Details
            status = 200
            response.message = "All data gotten"
            response.data = GetData
            response.success = true
            res.write(JSON.stringify({response, status}))
            res.end()
        }

        if(method === "POST" && url === "/"){
            const GetData = Details
           let build = JSON.parse(Holder)
           Details.push(build)
           let split = build.split("/")[1]
           let Get = parseInt(split)

           let filter =  Details.filter((el) => {
            return el.id === Get
           })
           if(filter){
            response.message = "Date has been gotten"
            response.data = GetData
            response.success = true;
            res.write(JSON.stringify({response, status}))
            res.end()
           }
        }
     })


})
server.listen(port, () => {
    console.log("server is up and listen");
    
})