import {NavLink, Link} from "react-router-dom"
import avatarImg from '../assets/images/avatar-icon.png';
import React, { useState, useEffect } from "react"

export default function Nav(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedin"))

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setIsLoggedIn(false)  // triggers rerender
    }

    return(
        <header>
            <Link className="site-logo" to ='/'>#VanLife</Link>
            <nav>
                <NavLink to="/" style={({isActive}) => isActive ? activeStyles : null}>
                Home</NavLink>
                <NavLink to="host" style={({isActive}) => isActive ? activeStyles : null}>
                Host</NavLink>
                <NavLink to="about" style={({isActive}) => isActive ? activeStyles : null}>
                About</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeStyles : null}>
                Vans</NavLink>


                
                <div className="login-container">
                    <Link to="/login" className="login-link">
                        <img 
                            src={avatarImg}
                            className="login-icon"
                            alt="avatar"
                        />
                    </Link>
                    {isLoggedIn && (<button className="logout-button" onClick={fakeLogOut}>Sign Out</button>)}
                </div>
                

            </nav>        
      </header>

    )
}