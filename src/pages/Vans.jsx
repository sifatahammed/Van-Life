import {
  Link,
  useSearchParams,
  useLoaderData,
  Await,defer
} from "react-router-dom"
import { Suspense } from "react"
import { getVans } from "../components/loader.jsx"


export async function loader() {
    return defer({ van: getVans() })
}

export default function Vans() {
    const [searchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const dataPromise = useLoaderData()

    const createClass = (type) =>
        `van-type ${type} ${typeFilter === type ? "selected" : ""}`

    function renderVanElements(vans) {
        const displayedVans = typeFilter
            ? vans.filter(van => van.type === typeFilter)
            : vans

        return (
            <div className="van-list">
                {displayedVans.map(van => (
                    <div className="van-tile" key={van.id}>
                        <Link
                            to={van.id}
                            state={typeFilter ? { search: searchParams.toString() } : null}
                        >
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
        )
    }

    return (
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
                {typeFilter && (
                    <Link to="." relative="path" className="van-type clear-filters">
                        Clear Filter
                    </Link>
                )}
            </div>

            {/* Suspense and Await for deferred data */}
            <Suspense fallback={<div className="spinner"></div>}>
				<Await resolve={dataPromise.van}>
					{renderVanElements}
				</Await>
			</Suspense>

        </div>
    )
}
