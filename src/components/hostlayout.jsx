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
                <NavLink to = '.' end style={({isActive}) => isActive ? activeStyles : null}>
                Dashboard</NavLink>
                <NavLink to = 'reviews' style={({isActive}) => isActive ? activeStyles : null}>
                Reviews</NavLink>
                <NavLink to = 'vans' style={({isActive}) => isActive ? activeStyles : null}>
                Vans</NavLink>

                <NavLink to = 'income' style={({isActive}) => isActive ? activeStyles : null}>
                Income</NavLink>
            </header>           
            <Outlet />
        </>
        
    )
}