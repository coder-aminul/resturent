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

export const loadComment = (comment) => ({
  type: ActionType.LOAD_COMMENT,
  payload: comment,
});
export const commentLoading = () => ({
  type: ActionType.COMMENTS_LOADNING,
});
export const fetchComment = () => {
  return (dispatch) => {
    dispatch(commentLoading());
    axios
      .get(BaseURL + "comments")
      .then((response) => response.data)
      .then((comments) => dispatch(loadComment(comments)))
      .catch((error) => console.log(error.message));
  };
};

export const fetchDishes = () => {
  return (disptch) => {
    disptch(dishLoading());
    axios
      .get(BaseURL + "dishes")
      .then((response) => response.data)
      .then((dishes) => disptch(loadDish(dishes)))
      .catch((error) => console.log(error.message));
  };
};
