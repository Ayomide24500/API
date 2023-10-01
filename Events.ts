import Event from "events"
import { error } from "console"
import path from "path"
import fs from "fs"
console.log(Event)

const emmiter = new Event

emmiter.emit("Money", "Please help me to buy food of 300 naira")

emmiter.on("Money", () => {
  console.log("Okay my boy")
})

setInterval (() => {
})

const message = "welcome to Codelab"

const welcomeEvent = async () => {
    fs.mkdir("./Newpractice", (error): void => {
        if (error) {
        console.log("error creating folder", error)
        } else {
            console.log("folder created successfully")
    }
})

    fs.appendFile(path.join(__dirname, "../Newpractice", "sean.txt"), message, (error): void =>{
        if (error) {
            console.log("error creating sean", error)
        } else {
            console.log("Sean appended successfully")
        }
    })
}
console.log(welcomeEvent())

export default welcomeEvent;

// let date = new Date
// let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " Date: " + date.getDate()
// // console.log(time);s

// setInterval(()=>{
//     let rand = Math.floor(Math.random() * (2000 + 1000 - 1)) + 1000
//     let info = `\nWecome to Codelab, you got in on ${time}, and your registration number is ${rand}`
//     fs.appendFile(path.join(__dirname, "../NewFold", "sean.txt"), info, (error)=>{
//         if(error){console.log("Failed", error)}
//         else{
//             console.log("done");
            
//         }
        
// })
// }, 2000)
