import { NavLink, Link } from "react-router-dom"
import avatarImg from '../assets/images/avatar-icon.png'
import { useAuth } from "./AuthContext"

export default function Nav() {
    const { isLoggedIn, logOut } = useAuth()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink>
                <NavLink to="host" style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
                <NavLink to="about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
                <NavLink to="vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>

                <div className="login-container">
                    {isLoggedIn ? (
                        <>
                            <img src={avatarImg} className="login-icon" alt="avatar" />
                            <button className="logout-button" onClick={logOut}>Sign Out</button>
                        </>
                    ) : (
                        <Link to="/login" className="login-link">
                            <img src={avatarImg} className="login-icon" alt="avatar" />
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
