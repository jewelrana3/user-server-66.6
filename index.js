const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const users = [
    {id:1,name:'joy', email:'joy@gmail.com'},
    {id:2,name:'marium', email:'marium@gmail.com'},
    {id:3,name:'munnika', email:'munnika@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/user',(req,res)=>{
    console.log('api hitting')
    console.log(req.body)
})

app.listen(port,(req,res)=>{
    console.log('server is runnog')
})