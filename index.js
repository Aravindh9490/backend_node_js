const express=require("express")
const mongoose=require("mongoose")
const BrandName=require("./model")
const cors = require("cors");
const app = express()

app.use(express.json())



app.use(cors());



//connect to database
mongoose.connect("mongodb+srv://aravind123:qOwgf8VayEDFFWed@cluster0.zogmlv6.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("db conneted...")).catch(err=>console.log(`db ..${err}`))

const PORT=process.env.PORT

app.listen(PORT || 3004,()=>{
    console.log("server is runing....")
})

app.post("/adduser",async(req,res)=>{
    const {name,password}=req.body
    try{
        const newData=new BrandName({name,password})
        await newData.save()
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(`db error${err.message}`)
    }

})

app.get("/",(req,res)=>{
    res.send("Hello World!");
})





module.exports=app