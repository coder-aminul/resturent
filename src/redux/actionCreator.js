import DISHES from "../Data/Dishes";
import * as ActionType from "./ActionType";

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

    setTimeout(() => {
      disptch(loadDish(DISHES));
    }, 1000);
  };
};
