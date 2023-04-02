const express = require('express')
const app = express()

app.set ('view engine', 'pug')
app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('running')
})