const express = require("express")
const cors = require("cors")
const path = require("path")
const router = require("./src/routes")

const {json, urlencoded} = express

const app = express()

const port = 8080

app.use(json())
app.use(urlencoded({extended: false}))

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(router)

app.use('/home', (req,res) => {
    res.sendFile(path.join(__dirname+'/src/html/index.html'))
})

app.use("/changed", (req, res) => {
    res.send("this is miocroservice 1 v1.0.0")
})

app.listen(port, () => {
    console.log(`Server 1 running on port ${port}`)
})