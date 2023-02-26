import React from "react";
// import cardImg from "../Images/mclaren.jpg"

function Card(props) {
    return(
        <div className="card">
            <img className="card-img" 
            alt="card-img" 
            src={props.img}
              />
            <div className="card-stats">
            <i class="fa-solid fa-star card-star"></i>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) </span>
            <span className="gray">-{'>'} {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / car</p>
        </div>
    )
}

export default Card;