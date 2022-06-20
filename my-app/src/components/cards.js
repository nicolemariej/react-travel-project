import React from "react"
import {BiBeenHere} from "react-icons/bi"

export default function Cards(){
    return(
        <div className="cards">
            <img src="https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/central-america/guatemala/lake-atitlan/lake-atitlan_0004_guatemala-pier-at-lake-atitlan-in-guatemala_shutterstock_189649244.jpg?w=1920&h=940" className="destination-img" alt="Destination Image"/>
            <div className="cards-content">
                <span className= "country"><BiBeenHere />Guatemala</span>
                <span className="google-maps"> View on Google Maps</span>
        <h2>Lake Atitlan</h2>
<p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
<p className="description">Lake Atitlan is a volcanic lake located in the middle of guatemala. There are numerous surrounding towns. As well as spanish, the locals speak their native language. The language they speak will depend on which part of the lake their town is located.</p>
            </div>
          
        </div>
    )
}