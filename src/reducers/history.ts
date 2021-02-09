import { SET_HISTORY } from "../constants";

interface History {
   type: string;
   payload: string;
}

const historyReducer = (state: string = "", action: History) => {
   switch (action.type) {
      case SET_HISTORY:
         return action.payload;
      default:
         return state;
   }
};
export default historyReducer;
