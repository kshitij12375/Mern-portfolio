const {z}=require("zod");

// creating an object schema

const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 char"})
    .max(255,{message:"Name must be not greater than 255 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 char"})
    .max(255,{message:"Email must be not greater than 255 characters"}),
    phone:z
    .string({required_error:"Phone_no is required"})
    .trim()
    .min(10,{message:"Phone_no must be atleast of 10 char"})
    .max(20,{message:"Phone_no must be not greater than 20 characters"}),
    password:z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be atleast of 6 char"})
    .max(1024,{message:"password must be not greater than 1024 characters"})

    


}

)


const loginSchema=z.object({
    
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 char"})
    .max(255,{message:"Email must be not greater than 255 characters"}),
    password:z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be atleast of 6 char"})
    .max(1024,{message:"password must be not greater than 1024 characters"})

    


}

)







module.exports={signupSchema,loginSchema};