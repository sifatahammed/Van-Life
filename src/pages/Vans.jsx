// import { useState, useEffect } from "react"
import {Link, useSearchParams, NavLink, useLoaderData} from "react-router-dom"

export default function Vans(){
	// const [Data, setData] = useState([])
	// const [loading, setLoading] = useState(true);
	const[searchParams, setsearchParams] = useSearchParams()
	const typeFilter = searchParams.get("type")
	const Data = useLoaderData()

	// useEffect(()=>{async function fetchdata(){
	// 	const res = await fetch("/api/vans")
	// 	const data = await res.json()
	// 	setData(data.vans)
	// 	setLoading(false);}

	// 	fetchdata()
	// },[]
	//)

	const filter = typeFilter? Data.filter((van)=>van.type===typeFilter) : Data
	const createClass = (type) =>
		`van-type ${type} ${typeFilter === type ? "selected" : ""}`

	return(

				<div className="van-list-container">
					<h1>Explore our van options</h1>
					<div className="van-list-container">
						<Link to="?type=simple" className={createClass("simple")}>
							Simple
						</Link>
						<Link to="?type=rugged" className={createClass("rugged")}>
							Rugged
						</Link>
						<Link to="?type=luxury" className={createClass("luxury")}>
							Luxury
						</Link>
						{typeFilter?
						<Link to= "." relative="path" className="van-type clear-filters">
						Clear Filter
						</Link>:null}
					</div>
					<div className="van-list">	
						{filter.map((van) => (
							<div className="van-tile" key={van.id}>
								<Link to={van.id} state = {typeFilter?({search : searchParams.toString()}): null}>
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


	)
}