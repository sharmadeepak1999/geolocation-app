const express = require("express")

const port = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
	console.log("Server started at port " + port)
})