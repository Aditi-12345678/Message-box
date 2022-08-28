var express=require("express");
var router=express.Router();
const path=require("path");
const fs=require("fs");
router.get("/",function(req,res,next){
  res.render("index");
});
router.post("/submit-form",function(req,res){
  const senderName=req.body.username;
  const surname=req.body.surname
  const message=req.body.age;
  let content='Sent by: '+senderName+' Surname : '+surname+' age : '+message;
  fs.writeFile(path.join(__dirname,"../message.txt"),content,function(err){
   if(err){
    console.log(err);
    return;
   }
  
    res.render("submitted.ejs");

  });
});
module.exports=router;
