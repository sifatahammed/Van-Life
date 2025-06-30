import React from "react"
import { useLoaderData, 
    redirect, useNavigate, 
    useNavigation, 
    useActionData, 
    Form } from "react-router-dom"
import { loginUser } from "../components/loader.jsx"
import { useAuth } from "../components/AuthContext"


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formdata = await request.formData()
    const email = formdata.get("email")
    const password = formdata.get("password")
    const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try{
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin", "true")
        // Optionally dispatch an event to notify other tabs
        window.dispatchEvent(new StorageEvent("storage", { key: "loggedin", newValue: "true" }))

        return redirect(redirectTo)
    }catch(err){
        return err.message
    }
}

export default function Login() {
    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    // const [status, setStatus] = React.useState("idle")
    // const [error, setError] = React.useState(null)
    // const message = useLoaderData()
    // const navigate = useNavigate()

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")
    //     setError(null)
    //     loginUser(loginFormData)
    //         .then(data => {
    //             navigate("/host", { replace: true })
    //         })
    //         .catch(err => setError(err))
    //         .finally(() => setStatus("idle"))
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }
   
    const error = useActionData()
    const Navigation = useNavigation()
    const message = useLoaderData()
    const { logIn } = useAuth()

    // ✅ Sync AuthContext after localStorage is set by `action`
    React.useEffect(() => {
        if (localStorage.getItem("loggedin") === "true") {
            logIn()
        }
    }, [logIn])

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error}</h3>}

            <Form method = 'post' /* onSubmit={handleSubmit}*/ 
            className="login-form" 
            replace
            > 
                <input
                    name="email"
                    // onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    // value={loginFormData.email}
                />
                <input
                    name="password"
                    // onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    // value={loginFormData.password}
                />
                <button 
                    disabled={Navigation.state === "submitting"}
                >
                    {Navigation.state === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
