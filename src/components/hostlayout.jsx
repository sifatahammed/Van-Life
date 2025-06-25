import {NavLink, Outlet } from "react-router-dom"

export default function Dashboard (){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
            <header>
                <NavLink to = '/host' style={({isActive}) => isActive ? activeStyles : null}>
                Dashboard</NavLink>
                <NavLink to = '/host/reviews' style={({isActive}) => isActive ? activeStyles : null}>
                Reviews</NavLink>
                <NavLink to = '/host/income' style={({isActive}) => isActive ? activeStyles : null}>
                Income</NavLink>
            </header>           
            <Outlet />
        </>
        
    )
}