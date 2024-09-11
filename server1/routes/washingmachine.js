import express from "express";

import { washing } from "../models/washingmachine.js";
const router = express.Router();
// how to handel post
router.post("/washingmac",async function(req,res){
    try{
      if(
          !req.body.day ||
          !req.body.mode ||
          !req.body.time
      ){
          return res.status(400).send({
              message: 'please give valid information',
            });
      }
      const newwashing={
          day:req.body.day,
          mode:req.body.mode,
          time:req.body.time,
      };
      const wc=await washing.create(newwashing);
      return res.status(201).send(wc);

    }catch(error){
      console.log(error);
      res.status(500).send({message:error.message});
    }
});
// how to get data from server
router.get("/home",async function(req,res){
try{
    

   const allwc=await washing.find({});
   return res.status(201).json({
      count:allwc.length,
      allwc:allwc,
   });
}catch(error){
  console.log(error.message);
  res.status(500).send({message:error.message});
}
});
// how to get selected from server
router.get("/home/:id",async function(req,res){
try{
   const {id}=req.params;
   const selwc=await washing.findById(id);
   return res.status(201).json({
      count:selwc.length,
      selwc:selwc,
   });
}catch(error){
  console.log(error.message);
  res.status(500).send({message:error.message});
}
});
// how to update a data 
router.put("/home/:id",async function(req,res){
try{
 if(
  !req.body.time||
  !req.body.day||
  !req.body.mode
 ){
  return res.status(400).send({message:"please enter valid input"});
 }


//  const {id}=req.params;
const id = req.params.id.trim();
 const reslut=await washing.findByIdAndUpdate(id,req.body);
 if(!reslut){
  return res.status(404).send({message:"shedule not found"});
 }
 return res.status(201).send({message:"shedule updated sucessfully"});
}catch(error){
console.log(error.message);
res.status(500).send({message:error.message});
}
});
// how to delete data from server
router.delete("/home/:id",async function(req,res){
try{
 
  const id = req.params.id.trim();

//  const {id}=req.params;
 const reslut=await washing.findByIdAndDelete(id);
 if(!reslut){
  return res.status(404).send({message:"shedule not found"});
 }
 return res.status(201).send({message:"shedule deleted sucessfully"});
}catch(error){
console.log(error.message);
res.status(500).send({message:error.message});
}
});

export default router;
