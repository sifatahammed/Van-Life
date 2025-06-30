import { NavLink, Outlet, Navigate, useLocation } from "react-router-dom"
import React from "react"
import { useAuth } from "../components/AuthContext" // Your custom context

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const { isLoggedIn } = useAuth()
    const location = useLocation() // ✅ This gets the current path reactively

    if (!isLoggedIn) {
        // 👇 Redirect to login, preserving intended path
        return (
            <Navigate 
                to={`/login?message=You must Sign first.&redirectTo=${location.pathname}`} 
                replace 
            />
        )
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null}>
                    Dashboard
                </NavLink>
                <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyles : null}>
                    Reviews
                </NavLink>
                <NavLink to="vans" style={({ isActive }) => isActive ? activeStyles : null}>
                    Vans
                </NavLink>
                <NavLink to="income" style={({ isActive }) => isActive ? activeStyles : null}>
                    Income
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}
