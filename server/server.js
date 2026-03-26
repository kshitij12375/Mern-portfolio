require('dotenv').config();


const express=require('express');
const app=express();
const router=require('./router/auth-router');
const contactRouter=require('./router/contact-router');
const cors=require('cors');
const connectDB=require('./utils/db');
const errorMiddleware=require('./middlewares/error-middleware');

const corsOptions={
    origin:"https://mern-portfolio-pink.vercel.app",
    method:"POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(cors(corsOptions));

app.use(express.json());





//Mount the router on the app with the base path "/api/auth"
app.use("/api/auth",router);
app.use("/api/form",contactRouter);

app.use(errorMiddleware);


const PORT=5000;
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
})