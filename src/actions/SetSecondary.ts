import { SET_SECONDARY_CURRENCY } from "../constants";

export const setSecondary = (name: string) => {
   return {
      type: SET_SECONDARY_CURRENCY,
      payload: name,
   };
};
