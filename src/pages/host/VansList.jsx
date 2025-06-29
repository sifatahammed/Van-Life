import React from "react"
import { Link, useLoaderData, Await, defer} from "react-router-dom"
import { Suspense } from "react"
import {getHostVans} from "../../components/loader.jsx"
import {requireAuth} from "../../components/Auth.jsx"

export async function loader({request}) {
    await requireAuth(request)
    return defer({vanList: getHostVans()})
}

export default function VansList() {
    const vans = useLoaderData()

    function hostVansEls(vans){
        return(
            vans.map(van => (
            <Link
                to={van.id}
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
            </Link>))
    )}

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <Suspense fallback={<div className="spinner"></div>}>
                    <Await resolve={vans.vanList}>
                        {vans=>hostVansEls(vans)}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}
