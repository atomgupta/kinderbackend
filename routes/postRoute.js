const express=require('express')
const router=express.Router()
const Post=require('../models/post')
router.get('/posts',(req,res)=>{
Post.find({}).then(res=>{
    console.log(res)
})
})
router.post('/post',(req,res)=>{
    args=req.body
    console.log(req.body)
    Post.create({
        isImage:true,
        isText:true,
        text:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
        caption:"Changing planet one step at a time",
        eventLocation:"Jawahar Circle,Malviya Nagar",
        userLocation:"Malviya Nagar",
        userName:"Rahul",
        imageUrl:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      },(err,res)=>{
          if(err){
              console.log(err)
          }
          if(res){
              console.log(res)
          }
      })
      res.send("ok")
})

module.exports=router