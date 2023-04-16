const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const dev = require("./config")
const connectDatabase = require("./config/db")
const userRouter = require("./routes/users")


const app = express()

const PORT = dev.app.serverPort

app.use(morgan("dev"))
app.use("(api/users",userRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res) =>{
    res.status(200).send("api is running")
})

app.listen(PORT, async ()=> {
    console.log(`server is running on port ${PORT}`);
    await connectDatabase()
})