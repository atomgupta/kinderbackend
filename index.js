const express=require('express')
const router = require('./routes/postRoute')
const app=express()
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://pushpak:Atom.123@cluster0.rdq0r.mongodb.net/kinder?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const postRoute=require('./routes/postRoute')
app.use(bodyparser.json())
app.use(postRoute)
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.listen(5000,()=>{
    console.log("running")
})