import {Link, Outlet } from "react-router-dom"

export default function Dashboard (){
    return(
        <>
            <header><Link to = '/host/reviews'>Reviews</Link>
            <Link to = '/host/income'>Income</Link></header>           
        </>
        
    )
}