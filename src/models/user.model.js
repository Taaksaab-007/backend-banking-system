const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
 const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required for creating a user"],
        trim:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid Email address"],
        unique:[true,"Email already Exits"]
    },
    name:{
        type:String,
        required:[true,"Name is required for creating a account"]

    },
    password:{
        type:String,
        required:[true,"Password is required for creating account"],
        minlength:[6,"Password should be contain more than 6"],
        select:false
    }
},
{
    timestamps:true 
 })
 userschema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return 
    }
    const hash=await bcrypt.hash(this.password,10)
    this.password=hash
    return 
 })

 userschema.methods.comparePassword=async function(password){
return await bcrypt.compare(password,this.password)
 }

 const userModel=mongoose.model("user",userschema)
module.exports=userModel