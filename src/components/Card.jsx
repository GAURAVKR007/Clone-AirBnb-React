import React from "react";
import cardImg from "../Images/mclaren.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-img" 
            alt="card-img" 
            src={cardImg}
              />
            <div className="card-stats">
            <i class="fa-solid fa-star card-star"></i>
            <span>5.0</span>
            <span className="gray">(6) </span>
            <span className="gray">-{'>'}USA</span>
            </div>
            <p>Life Lesson with Mclern</p>
            <p><span className="bold">From $2B</span> / car</p>
        </div>
    )
}

export default Card;