import { SET_PRIMARY_CURRENCY } from "../constants";

export const setPrimaryCurrency = (name: string) => {
   return {
      type: SET_PRIMARY_CURRENCY,
      payload: name,
   };
};
