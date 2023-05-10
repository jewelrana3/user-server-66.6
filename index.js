const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

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

app.post('/users',(req,res)=>{
    console.log('api hitting')
    console.log(req.body)
   const newUser = req.body;
   newUser.id = users.length + 1;
   users.push(newUser)
   res.send(newUser)

})

app.listen(port,(req,res)=>{
    console.log(`server is runnog,${port}`)
})