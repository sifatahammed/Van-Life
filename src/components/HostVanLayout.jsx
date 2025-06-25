import {NavLink, Outlet, Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import React from "react"

export default function HostVanLayout (){
    const param = useParams()
    const [currentVan, setcurrentVan] = React.useState(null)
        const [loading, setLoading] = React.useState(true);
        
        React.useEffect(()=>{async function fetchdata(){
            const res = await fetch(`/api/vans/${param.id}`)
            const data = await res.json()
            setcurrentVan(data.vans)
            setLoading(false);}
    
            fetchdata()
        },[param.id]
        )
    

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
        {loading ? (
         <div className="spinner"></div>
			) : (
            <div className="van-detail-container">
                {currentVan ? (
                    <>
                        <Link
                            to=".."
                            relative="path"
                            className="back-button"
                        >&larr; <span>Back to all vans</span></Link>
            
                        <div className="host-van-detail-layout-container">
                            <div className="host-van-detail">
                                <img src={currentVan.imageUrl} />
                                <div className="host-van-detail-info-text">
                                    <i
                                        className={`van-type van-type-${currentVan.type}`}
                                    >
                                        {currentVan.type}
                                    </i>
                                    <h3>{currentVan.name}</h3>
                                    <h4>${currentVan.price}/day</h4>
                                </div>
                            </div>
                        </div>
                        <header>
                            <NavLink to = "." end style={({isActive}) => isActive ? activeStyles : null}>
                            Details</NavLink>
                            <NavLink to ="price" style={({isActive}) => isActive ? activeStyles : null}>
                            Pricing</NavLink>
                            <NavLink to = "photo" style={({isActive}) => isActive ? activeStyles : null}>
                            Photos</NavLink>
                        </header> 
                    </>
                ) : <h2>Failed to load van details. Please try again later.</h2>}
            </div>)
            }

                      
            <Outlet />
        </>
        
    )
}