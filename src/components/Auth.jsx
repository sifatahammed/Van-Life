import { redirect } from "react-router-dom"

export async function requireAuth(request){
    const pathname = new URL(request.url).pathname
    const isSignedIn = localStorage.getItem("loggedin") === "true"
    if (!isSignedIn){
        console.log("Auth check running...")
        return redirect(`/login?message=You must Sign In first.&redirectTo=${pathname}`)    
    }
}