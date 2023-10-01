// import http, { IncomingMessage, ServerResponse } from "http"

// const port: number = 3000

// interface iMassege {
//   message: string
//   data: null | [] | {}[]
//   success: boolean
// }

// interface Data {
//   name: string
//   id: number
//   stack:string
// }
// const Data = [
//   {
//     id: 1,
//     name: "Ayo",
//     stack: "full-stack"
//   },
//   {
//     id: 1,
//     name: "Ayo",
//     stack: "full-stack"
//   },
//   {
//     id: 1,
//     name: "Ayo",
//     stack: "full-stack"
//   },
//   {
//     id: 1,
//     name: "Ayo",
//     stack: "full-stack"
//   },
// ]
// const server = http.createServer((req:IncomingMessage, resp:ServerResponse<IncomingMessage>) => {
//   resp.setHeader("content-Type", "Application/json")

//   const {method, url} = req
  
//   let Status: number = 200

//   let response: iMassege = {
//       message: "failed",
//       data: null,
//       success: true
//   }
//   let Container: any = []
//   req.on("data", (chunck: any) => {
//     Container.push(chunck)
//   })
//   //Patch
//  if(method === "PATCH"){
//   let build = JSON.parse(Container)

//   let details: any = url?.split("/")
//   let datavalue = parseInt(details)

//   let Find = Data.some((el)=> {
//     return el.id === datavalue
//   })
//   if(Find === false){
//     Status = 404
//   }
//   response.message = "Updated successfully"
//   response.data = null
//   response.success = true
//   resp.end()

//   resp.write(JSON.stringify({response, Status}))
//  }else{
//   const updateusername = build.name;
//   Data.map((user: any) => {
//     if(user?.id === datavalue){

//     }
//   })

//  }
  
// })