import React, {useState} from "react";
import Logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
 import "./Navbar.css";
 import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const[openLinks, status]=useState(false)
    const toggle=()=>{
      status(!openLinks)
    }
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks? "open" :"close"}>
          <img src={Logo} alt="imag"/>
          <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <button onClick={toggle}>
          <ReorderIcon/>
          </button>
          
        </div>
        </div>)
        }
  export default Navbar;