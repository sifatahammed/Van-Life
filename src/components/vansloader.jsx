export default async function vansloader() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw{message: "Failed to load vans data", statusText : "Bad Request", status : res.status}
    }
    const data = await res.json()
    return data.vans  
}
