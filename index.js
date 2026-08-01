const express = require('express')
const app = express()

var nums = 0;

app.get('/', (req, res) => {
    res.send("Hello world " + (nums++))
})

app.listen(3000, () => {
    console.log("server started")
})