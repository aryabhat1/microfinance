import React from 'react'
import './HeroStyle.css';

const Hero = () => {
    return (

        <header className="hero-section">
            <div className="hero-text-container">
                {/* <h1>My Bank</h1> */}

                <h3>Next Generation Digital Banking</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> harum voluptas quae iste? Delectus
                    laudantium, <br /> non tenetur doloremque harum laboriosam doloribus rerum veritatis, <br /> cum eveniet
                    officia accusamus amet facilis! Eaque!</p>
            </div>

            <div className="hero-img-container">
                {/* <img src="../../images/hero1.jpg" alt="no image" srcset=""> </img> */}
                <img src={require("../../images/hero1.jpg")} />
            </div>

        </header >

    )
}

export default Hero