const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

var nums = 0;

app.get('/', (req, res) => {
    res.render('index', { title: "trang chu", key: "heeeee" })
})

app.get('/blog', (req, res) => {
    res.send("Blog Page")
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(3000, () => {
    console.log("server started")
})