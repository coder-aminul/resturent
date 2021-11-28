import React from "react";

function MenuItems(props) {
  return (
    <div className="box" onClick={props.dishesSelect}>
      <span>
        <img
          src={props.dish.image}
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
