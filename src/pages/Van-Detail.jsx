import React from "react"
import { useParams, Link } from "react-router-dom"

export default function VanDetails(){
    const param = useParams()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(()=>{async function fetchdata(){
        const res = await fetch(`/api/vans/${param.id}`)
        const data = await res.json()
        setVan(data.vans)
        setLoading(false);}

        fetchdata()
    },[param.id]
    )

    return(
        <>
        {loading ? (
         <div className="spinner"></div>
			) : (
            <div className="van-detail-container">
                <Link
                            to=".."
                            relative="path"
                            className="back-button"
                        >
                            &larr; <span>Back to all vans</span>
                        </Link>
                {van ? (
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
                ) : <h2>Failed to load van details. Please try again later.</h2>}
            </div>)
            }
        </>
    )
}