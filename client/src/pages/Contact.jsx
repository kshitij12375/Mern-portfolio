import { useState } from "react"
import {useAuth} from "../store/auth";
import "./Contact.css";

const defaultcontact=
    {
        username:"",
        email:"",
        message:"",
    }


export const Contact=()=>{
    

   




    const [user,setUser]=useState({
            username:"",
            
            email:"",
           
            message:"",
        });
           const handleInput=(e)=>{
            console.log(e);
            let name=e.target.name;
            let value=e.target.value;
            setUser({
                ...user,
                [name]:value,
            })
        }
           const handleSubmit=async (e)=>{
            e.preventDefault();
            console.log(user);
            const response=await fetch("https://mern-portfolio-kwz6.onrender.com/api/form/contact",{
                method:"POST",
                 headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
            })

            if(response.ok){
             setUser(defaultcontact);
             const data=await response.json();
             console.log(data);
             alert("Message sent succesfully");
            }
           
        };

    const {userr}=useAuth();
    const [userData,setuserData]=useState(true);

    if(userr && userData){
        setUser({
            username:userr.userData.username,
            email:userr.userData.email,
            message:""
        })

        setuserData(false);
    }
    return(
        <section>
            <main>
                <div className="LoginForm">

                   
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
                        <input type="email"
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
                        <label htmlFor="message">message</label>
                        <textarea type="text"
                         name="message"
                         
                         cols="30"
                         rows="10"
                         id="message"
                         required
                         autoComplete="off"
                          value={user.message}
                         onChange={handleInput}
                        >

                        </textarea>
                        
                    </div>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            </main>
        </section>
    )

}