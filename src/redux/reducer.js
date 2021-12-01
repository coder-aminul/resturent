import COMMENTS from "../Data/Comments";
import DISHES from "../Data/Dishes";
const intstate = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = intstate, action) => {
  return state;
};
