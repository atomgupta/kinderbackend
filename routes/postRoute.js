const express=require('express')
const router=express.Router()
const Post=require('../models/post')



router.get('/posts',(req,res)=>{
Post.find({}).then(response=>{
    console.log(response)
    res.json({response})

})
})



router.post('/post',(req,res)=>{
    args=req.body
    console.log(req.body)
    Post.create({
        isImage:req.body.isImage,
        isText:req.body.isText,
        text:req.body.postText,
        caption:req.body.caption,
        eventLocation:req.body.eventLocation,
        userLocation:req.body.userLocation,
        userName:req.body.userName,
        imageUrl:req.body.imageUrl
      },(err,response)=>{
          if(err){
              console.log(err)
              res.send("failed")
          }
          if(response){
              console.log("ok")
              res.json({postcreated:response})
          }
      })
    //   res.send("ok")
})

module.exports=router