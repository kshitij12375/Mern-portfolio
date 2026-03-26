import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";




export const Login=()=>{
      const [user,setUser]=useState({
        
        email:"",
       
        password:"",
    });

    const Navigate=useNavigate();
    const {storelocaltokenInLS}=useAuth();

    
       const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }
       const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user);
        try {
            const response= await fetch(`https://mern-portfolio-kwz6.onrender.com/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
        });

        console.log(response);

        if(response.ok){
             const res_data=await response.json();

            console.log("res from server",res_data);

            storelocaltokenInLS(res_data.token);
            setUser({
                
                email:"",
                password:""
            })

            Navigate("/")
        }
        } catch (error) {
            console.log("Login",error);
        }

       
    };
    return(
        <section>
            <main>
                <div className="LoginForm">

                   
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="email">email</label>
                        <input type="text"
                         name="email"
                         placeholder="email"
                         id="email"
                         required
                         autoComplete="off"
                          value={user.email}
                         onChange={handleInput}
                        />
                        </div>

                        <div>
                        <label htmlFor="password">password</label>
                        <input type="password"
                         name="password"
                         placeholder="password"
                         id="password"
                         required
                         autoComplete="off"
                          value={user.password}
                         onChange={handleInput}
                        />
                        
                    </div>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            </main>
        </section>
    )

}