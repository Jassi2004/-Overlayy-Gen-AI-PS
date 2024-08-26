import React from "react";
import hero from "./Images/hero.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MainContent = () => {
    return (
        <>
        <Navbar/>
        <div className="main-content">
            <div className="text-content">
                
                
                <h3><i className="fa-solid fa-eye"></i>A.I. Never Seen Before</h3>
                <h2>HackinTech.AI</h2>
                <p>"Unlock Insights, One Link at a Time!"</p>
                <Link to="/test">
                        <button className="try-now">
                            Try Now <i className="fa-solid fa-arrows-left-right fa-rotate-by"></i>
                        </button>
                    </Link>
            </div>
            <div className="image-content">
                <img src={hero} alt="AI Visualization" />
            </div>
            {/* <div className="circle"></div> */}
        </div>
        </>
    );
};

export default MainContent;
