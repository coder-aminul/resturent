import React from "react";

const DishDetails = (props) => {
  console.log(props);
  return (
    <div>
      <div className="box">
        <span>
          <img
            src={props.dish.image}
            alt={props.dish.name}
            className="menu-img"
          />
        </span>
        <h3>{props.dish.name}</h3>
        <p>{props.dish.description}</p>
        <button className="btn btn-success">${props.dish.price}</button>
      </div>
    </div>
  );
};

export default DishDetails;
