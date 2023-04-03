const express = require('express')
const app = express()

app.set ('view engine', 'pug')
app.use ('/static', express.static('public'))
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/create', (req, res) =>{
    app.render('create')
})
app.listen(8000, err => {
    if (err) console.log(err)

    console.log('running')
})