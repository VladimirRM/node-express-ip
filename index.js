const express = require('express')


const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/' ,(req,res)=>{
    res.render('index')
})
app.get('/about' ,(req,res)=>{
    res.render('about')
})
app.get('/user/:username/' ,(req,res)=>{
    let data = {username: req.params.username, hobbies:['Football','Basketball','Skate']}
    res.render('user',data)
})
app.post('/check-user',( req,res)=>{
    console.log(req.body)
})


const PORT = 3000


app.listen(PORT,()=>{
  console.log(`Server started: http://localhost:${PORT}`);
})