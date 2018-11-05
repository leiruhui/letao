const express = require('express')
const app = express()
// 托管静态资源
app.use(express.static('./views'))
app.use('/semantic',express.static('./semantic'))
app.use('/node_modules',express.static('./node_modules'))
app.listen(3001,()=>{
    console.log('Express server running at http://127.0.0.1:3001')
})