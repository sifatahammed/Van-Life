import {Link, Outlet} from "react-router-dom"
import Nav from "../components/nav.jsx"

export default function Layout(){
    return(
        <>
        	<Nav />
					<Outlet />
        </>
    )
}