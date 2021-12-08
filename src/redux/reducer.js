import { combineReducers } from "redux";
import COMMENTS from "../Data/Comments";
import * as ActionType from "../redux/ActionType";

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
  switch (action.type) {
    case ActionType.DISH_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
      };
    case ActionType.LOAD_DISH:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
      };
    default:
      return dishState;
  }
};

const commentsReducer = (commentSate = COMMENTS, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      let comment = action.payload;
      comment.id = commentSate.length;
      comment.date = new Date().toDateString();
      //console.log(comment);
      return commentSate.concat(comment);
    default:
      return commentSate;
  }
};
export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentsReducer,
});
