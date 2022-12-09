import React from "react";
import "../pages/Footer.css"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
            <div>
                <p>&copy;2022 lostsoulpizza.com</p>
            </div>

        </div>
    )
}