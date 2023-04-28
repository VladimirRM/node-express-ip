const express = require('express')


const app = express()

app.get('/' ,(req,res)=>{
    res.send('This home page')
})
app.get('/user/:username/:id' ,(req,res)=>{
    res.send(`User id:${req.params.id},Username: ${req.params.username}`)
})
app.get('/about' ,(req,res)=>{
    res.send('About')
})


const PORT = 3000


app.listen(PORT,()=>{
  console.log(`Server started: http://localhost:${PORT}`);
})