import { SET_PRIMARY_CURRENCY } from "../constants";

interface Primary {
   type: string;
   payload: string;
}

const primaryReducer = (state: string = "", action: Primary) => {
   switch (action.type) {
      case SET_PRIMARY_CURRENCY:
         return action.payload;
      default:
         return state;
   }
};
export default primaryReducer;
