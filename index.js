const express = require('express')


const app = express()

app.set('view engine','ejs')

app.get('/' ,(req,res)=>{
    res.render('index')
})
app.get('/about' ,(req,res)=>{
    res.send('about')
})
app.get('/user/:username/' ,(req,res)=>{
    res.send('user')
})


const PORT = 3000


app.listen(PORT,()=>{
  console.log(`Server started: http://localhost:${PORT}`);
})