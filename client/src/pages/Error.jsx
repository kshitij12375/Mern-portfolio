import { NavLink } from "react-router-dom"

export const Error= ()=>{
    return (
        <>
        <h1>Error 404 not found</h1>
        <NavLink to ="/">return Home</NavLink>
         <NavLink to ="/contact">report problem </NavLink>
        </>
    )
}