import { SET_AMOUNT } from "../constants";

export const setAmount = (num: number) => {
   return {
      type: SET_AMOUNT,
      payload: num,
   };
};
