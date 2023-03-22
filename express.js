const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.status(200).send('Hello World')
})
app.get('/about', (req, res)=> {
  res.status(200).send('About')
})
app.get('/contact', (req, res)=> {
  res.status(200).send('contact')
})

app.get("*", (req, res)=>{
    res.status(400).send('404 uhu hatasi')
} )

const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu port ${port} ta calismaya basladi`)
})