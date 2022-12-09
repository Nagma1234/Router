import React from "react";
import Mutliple from "../images/Multiple.jpg";
import "../Aboutus.css";

export default function About(){
    return(
        <div className="about">
            <div className="aboutTop"
            style={{ backgroundImage: `url(${Mutliple})`}}></div>
            <div className="aboutBottom">
                <h3>ABOUT US</h3>
                <p>When it comes to PizzaExpress ingredients, we never compromise. After all, they’re the foundation for our great flavours. The same goes for our commitment to bringing fresh ideas to the table – whether in the form of the American Hot, Romana, or Leggera pizza, Dough Balls, or Peroni beer.
                 The ingredients for a great dining out experience? Delicious food, friendly people and, crucially, great atmosphere. It’s an approach we’ve kept on our menu since our founder’s passion for jazz put it there.
                 We like to create great experiences as much as we enjoy making fantastic pizzas. We trace our love of a good party back to our founder – Peter was a great host. His ‘party spirit’ lives on today at PizzaExpress, with a variety of fun celebrations you can enjoy.

                </p>
            </div>
        </div>
    )
}
