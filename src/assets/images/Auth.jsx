import { redirect } from "react-router-dom"

export async function requireAuth(request){
    const url = new URL(request.url)
    const isSignedIn = localStorage.getItem("loggedin")
    if (!isSignedIn){
        console.log("Auth check running...")
        return redirect(`/login?message=You must Sign In first.&redirectTo=${url.pathname}`)    
    }
}