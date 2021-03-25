import { SET_AMOUNT } from "../constants";

interface Amount {
   type: string;
   payload: number;
}

const amountReducer = (state: number = 0, action: Amount) => {
   switch (action.type) {
      case SET_AMOUNT:
         return action.payload;
      default:
         return state;
   }
};
export default amountReducer;
