import { SET_CURRENCY_HISTORY } from "../constants";

interface History {
   type: string;
   payload: string;
}

const currencyHistoryReducer = (state: string = "", action: History) => {
   switch (action.type) {
      case SET_CURRENCY_HISTORY:
         return action.payload;
      default:
         return state;
   }
};
export default currencyHistoryReducer;
