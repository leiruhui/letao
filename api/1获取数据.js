const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.get('/user',(req,res)=>{
    res.send('ok')
})
app.get('/user/:id/:name',(req,res)=>{
    res.send('ojbk')
})
app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('kkkk')
})
app.listen(3001,()=>{
    console.log('server running at http://127.0.0.1:3001')
})