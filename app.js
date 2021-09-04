/** packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
})

/** app configuration */
const app = express()
const port = config.get("server-port")

app.use(jsonParser)
app.use(urlEncodedParser)

const routes = require("./routes/product.routes").productRoutes(app)

app.get("/", (request, responds, next) => {
    responds.send("Welcome to academic rest api1.")
})

app.listen(port, () => {
    console.log("Server running");
})