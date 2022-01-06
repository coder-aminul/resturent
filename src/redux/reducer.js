import { combineReducers } from "redux";
import * as ActionType from "../redux/ActionType";
import * as Forms from "./Forms";
import { createForms } from "react-redux-form";

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

const commentsReducer = (
  commentSate = { isLoading: true, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENT:
      return {
        ...commentSate,
        isLoading: false,
        comments: action.payload,
      };
    case ActionType.COMMENTS_LOADNING:
      return {
        ...commentSate,
        isLoading: true,
        comments: [],
      };
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
  ...createForms({
    contactForm: Forms.initialContactForm,
    commentForm: Forms.initialCommentForm,
  }),
});
