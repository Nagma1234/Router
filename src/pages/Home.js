import React from "react";
import "./Home.css";
import {Link} from "react-router-dom"
import Pizza from "../images/Pizza.jpg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Pizza})`}}>
    <div className="headerContainer" >
        <h2>Banglore's pizza hut</h2>
        <p>CUSTOMIZED PIZZA</p>
        <Link to="/menu">
        <button> ORDER NOW</button>
        </Link>
      </div>
    
    </div>
  );
}

export default Home;