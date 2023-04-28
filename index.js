const express = require('express')


const app = express()

app.get('/' ,(req,res)=>{
    res.send('This home page')
})
app.get('/about' ,(req,res)=>{
    res.send('About')
})


const PORT = 3000


app.listen(PORT,()=>{
  console.log(`Server started: http://localhost:${PORT}`);
})