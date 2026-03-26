import { useState } from "react";
import "./Register.css";
import { useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";



export const Register=()=>{
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

   const Navigate=useNavigate();
   const {storelocaltokenInLS}=useAuth();


    const handleInput=async (e)=>{
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
            const response= await fetch(`http://localhost:5000/api/auth/register`,{
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
                username:"",
                email:"",
                phone:"",
                password:""
            })

            Navigate("/login")
        }
        } catch (error) {
            console.log("register",error);
        }

        
        
       
    };
    return(
       <>
       <section>
        <main>
            <div className="registration-form">
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text"
                         name="username"
                         placeholder="username"
                         id="username"
                         required
                         autoComplete="off"
                         value={user.username}
                         onChange={handleInput}
                        />
                        
                    </div>
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
                        <label htmlFor="phone">phone</label>
                        <input type="number"
                         name="phone"
                         placeholder="phone"
                         id="phone"
                         required
                         autoComplete="off"
                          value={user.phone}
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
                    <br/>
                    <button type="submit" className="btn">Submit</button>
                    
                </form>
            </div>
        </main>
       </section>
       </>
    )
}