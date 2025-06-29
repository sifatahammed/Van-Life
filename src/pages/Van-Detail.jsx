import React from "react"
import { defer, useParams, Link, useLocation, useLoaderData, Await } from "react-router-dom"
import {getVans} from "../components/loader.jsx"
import { Suspense } from "react"

export function loader({ params }) {
    const vanDetailPromise = getVans(params.id)
    return defer({vanDetail: vanDetailPromise})
}
export default function VanDetails(){
    // const param = useParams()
    // const [van, setVan] = React.useState(null)
    // const [loading, setLoading] = React.useState(true);
    const location = useLocation()
    const typeParam = new URLSearchParams(location.state?.search).get("type")
    const van = useLoaderData()
    
    // React.useEffect(()=>{async function fetchdata(){
    //     const res = await fetch(`/api/vans/${param.id}`)
    //     const data = await res.json()
        
    //     setVan(data.vans)
    //     setLoading(false);}

    //     fetchdata()
    // },[param.id]
    // )

    const hostVansDetails = (van)=>
            (van ? (
                    <div className="van-detail">
                        
                        <img alt={van.name} src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>
                            {van.type}
                        </i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Failed to load van details. Please try again later.</h2>)

    return(
        <>
            <div className="van-detail-container">
                <Link
                            to={`..?${location.state?.search|| ""}`}
                            relative="path"
                            className="back-button"
                        >
                            &larr; <span>
                                {`Back to ${
                                    typeParam ? typeParam.charAt(0).toUpperCase() + typeParam.slice(1) : "All"
                                } vans`}
                                </span>
                        </Link>
                
                <Suspense fallback={<div className="spinner"></div>}>
                    <Await resolve={van.vanDetail}>
                        {vans=>hostVansDetails(vans)}
                    </Await>
                </Suspense>
            </div>
        </>
    )
}