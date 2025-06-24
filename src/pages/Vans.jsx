import Nav from "../components/nav"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

export default function Vans(){
	const [Data, setData] = useState([])
	const [loading, setLoading] = useState(true);

	useEffect(()=>{async function fetchdata(){
		const res = await fetch("/api/vans")
		const data = await res.json()
		setData(data.vans)
		setLoading(false);}

		fetchdata()
	},[]
	)

	return(
		<>
			<Nav /> 
			{loading ? (
      <div className="spinner"></div>
			) : (
				<div className="van-list-container">
            <h1>Explore our van options</h1>
					<div className="van-list">	
						{Data.map((van) => (
							<div className="van-tile" key={van.id}>
								<Link to={`/vans/${van.id}`}>
									<img src={van.imageUrl} alt={van.name} className="van-image" />
									<div className="van-info">
										<h3>{van.name}</h3>
										<p>${van.price}<span>/day</span></p>
									</div>
									<i className={`van-type ${van.type} selected`}>{van.type}</i>
								</Link>
								</div>
							))}				
					</div>
				</div>
      )}
		</>
	)
}