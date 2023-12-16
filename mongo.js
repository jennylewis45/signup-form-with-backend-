const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://marium:marium1234@signup.wwfwwew.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const result=mongoose.model("result",newSchema)
module.exports=result