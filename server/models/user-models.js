const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,  
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

})

userSchema.pre('save',async function(next){
    console.log("pre",this);

    const user=this;
    if(!user.isModified('password')){
        next();
    }

    try {
    const salt=await bcrypt.genSalt(10);
    const hash_Password=await bcrypt.hash(user.password,salt);
    user.password=hash_Password;
        
    } catch (error) {
        next(error);
    }


}

);

userSchema.methods.generateToken= async function(){
     try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        })
        ;
     } catch (error) {
        console.log(error);
     }
}

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

const user= new mongoose.model('User',userSchema);

module.exports=user;