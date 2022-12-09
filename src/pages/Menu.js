import React from "react";
import MenuItem from "../MenuItem";
import{ MenuList } from "../MenuList";
import "./Menu.css";
export default function Menu(){
    return(
        <div className="menu">
            <h1 className="menuTile">Our Menu</h1>
            <div className="menuList">{MenuList.map((menuItem, key)=>{
                return <MenuItem 
                key={key}
                image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
            })}

            </div>
        </div>
    )
}