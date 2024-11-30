
const express = require("express")
require("./connection")
var stdModel = require("./model/Student")

var app = express()

app.use(express.json());


    //add 
app.post("/add",async (req,res)=>{
   try {
        await stdModel(req.body).save()
        res.send("Data added!!");
   } catch (error) {
        console.log(error);
   }
})
   // view
   app.get("/view",async (req,res)=>{
    try {
         const data = await stdModel.find()
         res.send(data);
    } catch (error) {
         console.log(error);
    }
 })
    // Delete
 app.delete("/remove/:id",async (req,res)=>{
    try {
         await stdModel.findByIdAndDelete(req.params.id)
         res.send("Data Deleted");
    } catch (error) {
         console.log(error);
    }
 }) 
    // Update
 app.put("/update/:id",async (req,res)=>{
    try {
         const update = await stdModel.findByIdAndUpdate(req.params.id,req.body)
         res.send("Data Updated");
    } catch (error) {
         console.log(error);
    }
 })

 
// Port
app.listen(4545,()=>{
    console.log("Port is running");
});