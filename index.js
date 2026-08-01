const express = require('express')
const app = express()

var nums = 0;

app.get('/', (req, res) => {
    res.send("Hello world " + (nums++))
})

app.get('/blog', (req, res) => {
    res.send("Blog Page")
})

app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.listen(3000, () => {
    console.log("server started")
})