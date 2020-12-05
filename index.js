const express=require('express')
const cors=require('cors')
const router = require('./routes/postRoute')
const app=express()
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const postRoute=require('./routes/postRoute')
mongoose.connect("mongodb+srv://pushpak:Atom.123@cluster0.rdq0r.mongodb.net/kinder?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
app.use(cors())
app.use(bodyparser.json())
app.use(postRoute)
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.listen(5000,()=>{
    console.log("running")
})