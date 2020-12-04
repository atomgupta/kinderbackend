const mongoose=require('mongoose')
const Post=new mongoose.Schema({
    isImage:Boolean,
  isText:Boolean,
  text:String,
  caption:String,
  eventLocation:String,
  userLocation:String,
  userName:String,
imageUrl:String})


module.exports=mongoose.model('post',Post)