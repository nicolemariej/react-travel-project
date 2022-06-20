import React from "react"
import {BiBeenHere} from "react-icons/bi"

export default function Card(props){
    return(
        <div className="cards">
            <img src={props.imageUrl} className="destination-img" alt={props.title}/>
            <div className="cards-content">
                <span className= "country"><BiBeenHere />{props.location}</span>
                <a href={props.googleMapsUrl} target="blank" className="google-maps"> View on Google Maps</a>
        <h2>{props.title}</h2>
<p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
<p className="description">{props.description}</p>
            </div>
        </div>
    )
}