import { SET_PRIMARY_CURRENCY } from "../constants";

export const setPrimary = (name: string) => {
   return {
      type: SET_PRIMARY_CURRENCY,
      payload: name,
   };
};
