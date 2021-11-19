import React from "react";

function MenuItems(props){
    return(
        <div className="box">
            <span>
                <img src={props.dises.image} alt={props.dises.name} className="menu-img"/>
            </span>
            <h3>{props.dises.name}</h3>
            <button className="btn btn-success">${props.dises.price}</button>
        </div>
    );
}

export default MenuItems;