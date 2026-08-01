const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

var nums = 0;

app.get('/', (req, res) => {
    res.render('index', { title: "trang chu", key: "heeeee" })
})

app.get('/:id', (req, res) => {
    res.send(req.params.id)
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