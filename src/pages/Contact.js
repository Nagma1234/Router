import React from "react";
import Pizza7 from "../images/NewYork.jpg";
import "../Contact.css";
export default function Contact(){
    return(
        <div className="contact">
            <div className="leftSide"  style={{ backgroundImage: `url(${Pizza7})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter your full name" type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter your email id" type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="7" placeholder="enter message" name="message" required>

                    </textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}