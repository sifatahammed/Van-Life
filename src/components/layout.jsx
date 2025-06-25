import { Outlet} from "react-router-dom"
import Nav from "../components/nav.jsx"
import Footer from "../components/Footer.jsx"

export default function Layout(){
    return(
        <>
        	<Nav />
					<main><Outlet /></main>
					
					<Footer/>
        </>
    )
}