import { useEffect, useState } from "react";
import { createContext, useContext } from "react";


export const AuthContext = createContext();



export const AuthProvider=({children}) => {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [userr,setUser]=useState("")

    const storelocaltokenInLS=(serverToken)=>{
    setToken(serverToken);
    return localStorage.setItem("token",serverToken);


}
   const LogoutUser=()=>{
    setToken("");

    return localStorage.removeItem("token");
   }
   let loggedIn=!!token;

   console.log(loggedIn);
  const userAuthentication= async ()=>{
        try {
            const response=await fetch("https://mern-portfolio-kwz6.onrender.com/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })

            if(response.ok){
                const data =await response.json();
                console.log("user data",data);
                setUser(data);
            }
        } catch (error) {
             console.log("Error in fetching data")
        }
  }
   useEffect(()=>{      
    userAuthentication();
   },[]);


   return <AuthContext.Provider  value={{storelocaltokenInLS,loggedIn,LogoutUser,userr}}  >

          {children}
   </AuthContext.Provider>
}

export const useAuth = ()=>{

    const authContextvalue=useContext(AuthContext);
    if(!authContextvalue){
        throw new Error("useauth is used outside the provider")
        
    }

    return authContextvalue;
}



