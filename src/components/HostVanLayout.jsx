import React from "react"
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import {requireAuth} from "./Auth.jsx"
import {getHostVans} from "./loader.jsx"


export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVanLayout() {
    const currentVan = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
         <section>
        {currentVan ? (
                    <>
                        <Link
                            to=".."
                            relative="path"
                            className="back-button"
                        >
                            &larr; <span>Back to all vans</span>
                        </Link>

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

                            <header>
                                <NavLink
                                    to="."
                                    end
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                >
                                    Details
                                </NavLink>
                                <NavLink
                                    to="price"
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                >
                                    Pricing
                                </NavLink>
                                <NavLink
                                    to="photo"
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                >
                                    Photos
                                </NavLink>
                            </header>

                            {/* ✅ Child components rendered only when currentVan is ready */}
                            <Outlet context={currentVan} />
                        </div>
                    </>
                ) : (
                    <h2>Failed to load van details. Please try again later.</h2>
                )}
            </section>
    )
}
