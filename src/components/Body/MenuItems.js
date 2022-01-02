import React from "react";
import { BaseURL } from "../../redux/BaseURL";

function MenuItems(props) {
  return (
    <div className="box" onClick={props.dishesSelect}>
      <span className="badge badge-primary lables">{props.dish.label}</span>
      <span>
        <img
          src={BaseURL + props.dish.image}
          alt={props.dish.name}
          className="menu-img"
        />
      </span>
      <h3>{props.dish.name}</h3>
      <button className="btn btn-success">${props.dish.price}</button>
    </div>
  );
}

export default MenuItems;
