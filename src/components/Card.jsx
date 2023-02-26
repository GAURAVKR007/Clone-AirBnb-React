import React from "react";
// import cardImg from "../Images/mclaren.jpg"

function Card(props) {

    let bageText
    if(props.openSpots === 0){
        bageText = "SOLD OUT"
    }else if(props.location === "Online") {
        bageText = "ONLINE"
    }else{
        bageText = ""
    }

    return(
        <div className="card">
        { bageText && <div className="card--badge">{bageText}</div> }
            <img className="card-img" 
            alt="card-img" 
            src={props.item.coverImg}
              />
            <div className="card-stats">
            <i class="fa-solid fa-star card-star"></i>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) </span>
            <span className="gray">-{'>'} {props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / car</p>
        </div>
    )
}

export default Card;