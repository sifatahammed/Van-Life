import {useOutletContext} from "react-router-dom"

export default function Photo (){
    const van = useOutletContext()

    return(
        <img src={van.imageUrl} className="host-van-detail-image" />     
    )
}