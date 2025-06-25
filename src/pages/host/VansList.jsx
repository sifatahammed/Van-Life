import {Link} from "react-router-dom"
import React from "react"

export default function VansList(){
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
            fetch("/api/host/vans")
                .then(res => res.json())
                .then(data => {setVans(data.vans)
                setLoading(false)})},[])
                
    
        const hostVansEls = vans.map(van => (
            <Link
                to={`/host/vans/${van.id}`}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
    
    return(
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    loading ? (
                        <div className="spinner"></div>

                    ) : (
                        <section>
                            {hostVansEls}
                        </section>
                        )
                }
            </div>
        </section>
        

    )
}