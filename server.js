const express = require("express")
require("dotenv").config()
const { connectDb } = require("./src/config/db.connect")
const port = process.env.PORT
const urlRoutes = require("./routes/urlRoutes")

const app = express()
app.use(express.json())

app.use('/api', urlRoutes)
connectDb(process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}: http://localhost:${port}`)
})