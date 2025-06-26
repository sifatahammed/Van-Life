export default async function vansloader() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw new Error("Failed to load vans data")
    }
    const data = await res.json()
    return data.vans  
}
