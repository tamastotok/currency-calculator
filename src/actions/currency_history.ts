import { SET_CURRENCY_HISTORY } from "../constants";

export const setCurrencyHistory = (str: string) => {
   return {
      type: SET_CURRENCY_HISTORY,
      payload: str,
   };
};
