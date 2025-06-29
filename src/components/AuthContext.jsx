import React, { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem("loggedin") === "true"
    )

    // Sync login state across tabs/windows
    useEffect(() => {
        function syncLoginState(e) {
            if (e.key === "loggedin") {
                setIsLoggedIn(e.newValue === "true")
            }
        }
        window.addEventListener("storage", syncLoginState)
        return () => window.removeEventListener("storage", syncLoginState)
    }, [])

    function logIn() {
        localStorage.setItem("loggedin", true)
        setIsLoggedIn(true)
    }

    function logOut() {
        localStorage.removeItem("loggedin")
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
