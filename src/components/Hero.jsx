import React from "react";
import img from '../Images/CollageTravel2.png'
function Hero() {
    return(
        <section className="hero">
            <img 
            alt="img-travel" 
            src={img}
            className="hero-photo"
            />
            <h1 className="hero-header">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero;