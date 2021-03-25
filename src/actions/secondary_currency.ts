import { SET_SECONDARY_CURRENCY } from "../constants";

export const setSecondaryCurrency = (name: string) => {
   return {
      type: SET_SECONDARY_CURRENCY,
      payload: name,
   };
};
