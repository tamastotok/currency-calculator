import { SET_HISTORY } from "../constants";

export const setHistory = (str: string) => {
   return {
      type: SET_HISTORY,
      payload: str,
   };
};
