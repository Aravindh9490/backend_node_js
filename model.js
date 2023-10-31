const mongoose=require("mongoose")

const BrandName=mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

module.exports=mongoose.model("name",BrandName)