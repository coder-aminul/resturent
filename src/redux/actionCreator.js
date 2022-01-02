import { BaseURL } from "./BaseURL.js";
import * as ActionType from "./ActionType";
import axios from "axios";

export const addComment = (dishid, author, rating, comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    dishId: dishid,
    author: author,
    rating: rating,
    comment: comment,
  },
});

export const loadDish = (dish) => ({
  type: ActionType.LOAD_DISH,
  payload: dish,
});

export const dishLoading = () => ({
  type: ActionType.DISH_LOADING,
});

export const fetchDishes = () => {
  return (disptch) => {
    disptch(dishLoading());
    axios
      .get(BaseURL + "dishes")
      .then((response) => response.data)
      .then((dishes) => disptch(loadDish(dishes)));
  };
};
